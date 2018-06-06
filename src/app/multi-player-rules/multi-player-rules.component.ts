import { Component, OnInit, Inject } from '@angular/core';
import { MultiPlayerGameComponent } from '../multi-player-game/multi-player-game.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, 
  MatDialogConfig} from '@angular/material';

  import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";

@Component({
  selector: 'app-multi-player-rules',
  templateUrl: './multi-player-rules.component.html',
  styleUrls: ['./multi-player-rules.component.css']
})
export class MultiPlayerRulesComponent{

msg: String[]=[];
ws: any;
private serverUrl = 'http://localhost:8080/socket'
private stompClient;


  constructor(public dialogRef: MatDialogRef<MultiPlayerRulesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      //this.initializeWebSocketConnection()
    }


    onNoClick(): void {
      this.dialogRef.close();
    }
  

    // initializeWebSocketConnection(){
    //   this.ws = new SockJS(this.serverUrl);
    //   this.stompClient = Stomp.over(this.ws);
    //   let that = this;
     
    //   this.stompClient.connect({}, function(frame) {
    //   //  let data = JSON.stringify({
    //   //     message:'hello'
    //   //   });
    //   //   this.ws.send("/app/message", {}, data);
    //   //   console.log("Data  ja rha ========================>");

    //   let data = JSON.stringify({
    //     userName: "ajay",
    //     userId: 100,
    //     questionStamp: "Questionsssss",
    //     questionId: 200
    //   });
    //   this.ws.send("/app/message", {}, data);
        
    //   });
    // }



    sendResponse(){

    // var socket = new SockJS("http://localhost:8080/greeting1");
    // this.ws = Stomp.over(socket);
      console.log("Data Send ==========>");
   
    // let data = JSON.stringify({
    //   message:'hello'
    // });
    // this.ws.send("/app/message", {}, data);
    }

   // var socket = new SockJS("http://localhost:8080/greeting");
   // this.ws = Stomp.over(socket);
}
