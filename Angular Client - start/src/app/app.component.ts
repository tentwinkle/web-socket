import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Websocket Angular client ';
  userName: string;
  message: string;
  output: any[] = [];
  feedback: string;

  constructor() { }
  ngOnInit(): void {
    
  }

  messageTyping(): void {
    console.log(`${this.userName} is typing`)
    
  }

  sendMessage(): void {
    console.log({
      message: this.message,
      handle: this.userName
    });
    this.message = "";    
  }

 

}
