import { Injectable } from '@angular/core';
import { log } from "util";

@Injectable()
export class MultiPlayerService {

  timer;
  seconds: number;

  constructor(){ }

  displayTimer(){
      return Math.floor(this.seconds);
  }

}
