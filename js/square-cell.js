import { Component } from 'angular2/core';
import { NgClass } from 'angular2/common';

@Component({
  selector: 'square-cell',
  inputs: [
    'alwaysVisible',
    'home',
    'away',
    'stats',
    'scoreData'
  ],
  directives: [NgClass],
  template: `<div ng-mouseenter="show()" 
              (mouseenter)="show()"
              (mouseleave)="hide()"
              [ngClass]="priorityLevel()"
              ng-class="squareCell.priorityLevel">{{ visibleOrPercentage() }}
            </div>`
})
class SquareCell {
  currentlyVisible = false;

  visible() {
    return this.alwaysVisible || this.currentlyVisible;
  }

  show() {
    this.currentlyVisible = true;
  }

  hide() {
    this.currentlyVisible = false;
  }

  visibleOrPercentage() {
    return this.visible() ? this.percentage() : '';
  }

  percentage() {
    if (this.scoreData) {
      return this.scoreData
      .filter(i => i.home === this.home && i.away === this.away)
      .map(i => i.outcome)[0];
    }
  }

  priorityLevel() {
    if (this.stats) {
      var index = Math.round((this.percentage() - this.stats.min) / this.stats.max * (5));
      return `priority-level-${index + 1}`;
    }
  }
}

export default SquareCell;
