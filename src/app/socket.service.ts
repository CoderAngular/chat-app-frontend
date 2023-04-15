import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  //baseURL: string = "http://localhost:3000/";
  //private socket;
  constructor(private http: HttpClient) { 
    //this.socket = io(this.baseURL,{extraHeaders:{'username': "aaa"}});
  }

  userSignup(user:any){
    
    
    
    
    /*const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(user);
    console.log(body);
    //this.http.post(this.baseURL + '/userSignup', body, {'headers': headers})
    //this.socket.emit('userConnected', user);
    this.socket.io.opts.extraHeaders = {'username': 'bbb'};
    this.socket.emit('connection');*/
  }
}
