use iced::{self, executor, Application, Button, Column, Command, Element, Row, Settings, Text};

fn main() -> iced::Result {
    MainWindow::run(Settings::default())
}

pub struct MainWindow;

#[derive(Debug)]
pub enum MainMessage {
    Clicked,
}

impl Application for MainWindow {
    type Executor = executor::Default;

    type Message = MainMessage;

    type Flags = ();

    fn new(flags: Self::Flags) -> (Self, iced::Command<Self::Message>) {
        (Self, Command::none())
    }

    fn title(&self) -> String {
        String::from("OneLab Control")
    }

    fn update(
        &mut self,
        message: Self::Message,
        clipboard: &mut iced::Clipboard,
    ) -> iced::Command<Self::Message> {
        match message {
            MainMessage::Clicked => Command::none(),
        }
    }

    fn view(&mut self) -> Element<'_, Self::Message> {
        Column::new().push(Text::new("OneLab Control")).into()
    }
}
