import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Datasets } from './datasets.service';
import { ScoresService } from './scores.service';
import { HeaderComponent } from './header/header.component';
import { FootballSquaresComponent } from './football-squares/football-squares.component';
import { SuperbowlSquaresComponent } from './superbowl-squares/superbowl-squares.component';
import { SquareCell } from './square-cell/square-cell.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [FootballSquaresComponent],
  providers: [Datasets, ScoresService],
  declarations: [
    FootballSquaresComponent,
    HeaderComponent,
    SuperbowlSquaresComponent,
    SquareCell
  ]
})
export class FootballSquaresModule {}
