import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FootballSquaresComponent } from "./football-squares.component";
import { Datasets } from "./datasets.service";
import { ScoresService } from "./scores.service";

@NgModule({
  imports: [CommonModule],
  exports: [FootballSquaresComponent],
  providers: [Datasets, ScoresService],
  declarations: [FootballSquaresComponent]
})
export class FootballSquaresModule {}
