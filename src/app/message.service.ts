import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = []

  //add a message to messages
  add(message:string){
    this.messages.push(message)
  }
  
  //clear all messages
  clear(){
    this.messages = []
  }

}
