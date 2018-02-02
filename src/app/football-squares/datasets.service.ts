import { Injectable } from "@angular/core";

@Injectable()
export class Datasets {
  datasets: { id: string; name: string }[];
  constructor() {
    this.datasets = [
      { id: "quarter1", name: "Quarter 1" },
      { id: "quarter2", name: "Quarter 2" },
      { id: "quarter3", name: "Quarter 3" },
      { id: "superbowl", name: "Super Bowl" },
      { id: "scores", name: "All Games" }
    ];
  }
}
