import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SquaresService } from '../state/squares.service';
import { Datasets } from './datasets.service';
import { FootballSquaresComponent } from './football-squares/football-squares.component';
import { HeaderComponent } from './header/header.component';
import { ScoresService } from './scores.service';
import { SquareCellComponent } from './square-cell/square-cell.component';
import { SuperbowlSquaresComponent } from './superbowl-squares/superbowl-squares.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FootballSquaresComponent],
  providers: [Datasets, ScoresService, SquaresService],
  declarations: [
    FootballSquaresComponent,
    HeaderComponent,
    SuperbowlSquaresComponent,
    SquareCellComponent
  ]
})
export class FootballSquaresModule {}
