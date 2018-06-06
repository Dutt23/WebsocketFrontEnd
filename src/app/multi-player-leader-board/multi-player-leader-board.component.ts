import { Component, OnInit } from '@angular/core';
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";


import { Router } from "@angular/router";

@Component({
  selector: 'app-multi-player-leader-board',
  templateUrl: './multi-player-leader-board.component.html',
  styleUrls: ['./multi-player-leader-board.component.css']
})
export class MultiPlayerLeaderBoardComponent implements OnInit {

  
  constructor(
    private router: Router
  ) {}

  
  ngOnInit() {
  }

}
