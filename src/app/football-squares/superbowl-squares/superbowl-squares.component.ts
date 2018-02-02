import { Component, OnInit } from "@angular/core";
import { Datasets } from "../datasets.service";
import { ScoresService, Score } from "../scores.service";

let getMinAndMax = data => {
  let sortedData = data.map(x => x.outcome).sort((a, b) => a - b);
  let [min, max] = [sortedData[0], sortedData[sortedData.length - 1]];
  let deltas = 6,
    diff = (max - min) / deltas;
  return { min, max, diff, deltas };
};

@Component({
  selector: "app-superbowl-squares",
  templateUrl: "./superbowl-squares.component.html",
  styleUrls: ["./superbowl-squares.component.css"]
})
export class SuperbowlSquaresComponent {
  stats: { min: any; max: any; diff: number; deltas: number };
  data: Score;
  datasets: { id: string; name: string }[];
  rows = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  columns = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  allNumbers = false;
  dataset = "";
  constructor(datasetsService: Datasets, private ScoresService: ScoresService) {
    this.datasets = datasetsService.datasets;
  }

  updateDataset(value) {
    if (value) {
      this.data = this.ScoresService.get(value);
      this.stats = getMinAndMax(this.data);
    }
  }
}
