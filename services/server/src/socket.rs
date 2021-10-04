use actix::prelude::*;
use actix_web::{web, Error, HttpRequest, HttpResponse};
use actix_web_actors::ws::{self, Message, ProtocolError, WebsocketContext};
use std::time::{Duration, Instant};

const HEARTBEAT_INTERVAL: Duration = Duration::from_secs(5);
const CLIENT_TIMEOUT: Duration = Duration::from_secs(60);

pub async fn index(request: HttpRequest, stream: web::Payload) -> Result<HttpResponse, Error> {
    let res = ws::start(WSS::new(), &request, stream);
    res
}

pub struct WSS {
    heartbeat: Instant,
}

impl Actor for WSS {
    type Context = WebsocketContext<Self>;

    fn started(&mut self, context: &mut <Self as Actor>::Context) {
        self.heartbeat(context);
    }
}

impl StreamHandler<Result<Message, ProtocolError>> for WSS {
    fn handle(&mut self, message: Result<Message, ProtocolError>, context: &mut Self::Context) {
        match message {
            Ok(Message::Ping(ping)) => {
                self.heartbeat = Instant::now();
                context.pong(&ping)
            }
            Ok(Message::Pong(_)) => self.heartbeat = Instant::now(),
            Ok(Message::Text(text)) => context.text(text),
            Ok(Message::Binary(bin)) => context.binary(bin),
            Ok(Message::Close(reason)) => {
                context.close(reason);
                context.stop();
            }
            _ => context.stop(),
        }
    }
}

impl WSS {
    fn new() -> Self {
        Self {
            heartbeat: Instant::now(),
        }
    }

    fn heartbeat(&mut self, context: &mut <Self as Actor>::Context) {
        context.run_interval(HEARTBEAT_INTERVAL, |actor, context| {
            if Instant::now().duration_since(actor.heartbeat) > CLIENT_TIMEOUT {
                context.stop();
                return;
            }
            context.ping(b"");
        });
    }
}
