import { Component, OnInit, Input } from "@angular/core";
import { Score } from "../scores.service";

@Component({
  selector: "app-square-cell",
  templateUrl: "./square-cell.component.html",
  styleUrls: ["./square-cell.component.css"]
})
export class SquareCell {
  @Input() alwaysVisible: boolean;
  @Input() home: number;
  @Input() away: number;
  @Input() scoreData: Score[];
  @Input() stats;

  currentlyVisible = false;
  constructor() {}
  show() {
    this.currentlyVisible = true;
  }
  hide() {
    this.currentlyVisible = false;
  }

  visible() {
    return this.alwaysVisible || this.currentlyVisible;
  }

  percentage() {
    if (this.scoreData) {
      return this.scoreData
        .filter(i => i.home === this.home && i.away === this.away)
        .map(i => i.outcome)[0];
    }
  }

  visibleOrPercentage() {
    return this.visible() ? this.percentage() : "";
  }

  priorityLevel() {
    if (this.stats) {
      var index = Math.round(
        (this.percentage() - this.stats.min) / this.stats.max * 5
      );
      return `priority-level-${index + 1}`;
    }
  }
}
