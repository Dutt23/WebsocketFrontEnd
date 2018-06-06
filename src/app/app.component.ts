import { Component, SystemJsNgModuleLoader } from "@angular/core";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";
import { Http } from '@angular/http';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
}
