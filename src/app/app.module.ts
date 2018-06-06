import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AnimationBuilder } from "@angular/animations";
import { FormsModule } from "@angular/forms";
import { MatCardModule, MatDialog, MatDialogModule } from "@angular/material";
import { AppComponent } from "./app.component";
import { MultiPlayerGameComponent } from "./multi-player-game/multi-player-game.component";
import { MultiPlayerLeaderBoardComponent } from "./multi-player-leader-board/multi-player-leader-board.component";
import { AppRoutingModule } from "./routing";
import { MultiPlayerRulesComponent } from "./multi-player-rules/multi-player-rules.component";
import { AngularWebStorageModule } from "angular-web-storage";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MultiPlayerService } from "./multi-player.service";

@NgModule({
  declarations: [
    AppComponent,
    MultiPlayerGameComponent,
    MultiPlayerLeaderBoardComponent,
    MultiPlayerRulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    BrowserAnimationsModule,
    AngularWebStorageModule
  ],
  entryComponents: [MultiPlayerRulesComponent],
  providers: [MultiPlayerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
