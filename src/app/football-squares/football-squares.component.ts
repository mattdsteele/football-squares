import { Component, OnInit, Inject } from "@angular/core";
import { Datasets } from "./datasets.service";

@Component({
  selector: "app-football-squares",
  templateUrl: "./football-squares.component.html",
  styleUrls: ["./football-squares.component.css"]
})
export class FootballSquaresComponent implements OnInit {
  constructor(private dataset: Datasets) {}

  ngOnInit() {
    console.log(this.dataset.datasets);
  }
}
