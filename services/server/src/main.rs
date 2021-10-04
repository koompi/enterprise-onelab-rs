mod socket;

use actix_web::{web, App, HttpServer};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let address = "0.0.0.0:3000";

    let server = HttpServer::new(move || App::new().route("/ws", web::get().to(socket::index)));

    server.bind(address)?.run().await
}
