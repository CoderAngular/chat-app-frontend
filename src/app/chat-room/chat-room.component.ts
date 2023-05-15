import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { io } from "socket.io-client";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  socket:any = null;
  readonly url = 'ws://localhost:3000';
  messages: [Message] | any[] = [];
  username: string = '';
  users: User[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService,) { 
    this.route.params.subscribe((params: any) => {
      this.username = params['id'];
   })
  }

  ngOnInit(): void {
    this.socket = io(this.url);
    
    //Join chat room
    this.socket.emit('joinChat', this.username);

    //Listen to the message from server
    this.socket.on('message', (message: Message) => {
        this.messages.push(message);
    })

    //Listen to the latest users list from server
    this.socket.on('users', (users:[User]) => {
      this.users = users;
  })
  }

  sendMessage(mymessage: HTMLTextAreaElement){
    let msgObj = {
      user: this.username,
      message: mymessage.value
    }

    //Emit message to server
    this.socket.emit('chatMessage', msgObj);
    mymessage.value = '';
  }

}

interface Message {
  username: string,
  message: string,
  time: Date
}
interface User {
  sid: string,
  username: string
}
