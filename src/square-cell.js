class SquareCellController {
  constructor($scope) {
    this.visible = this.alwaysVisible;

    //Hey, how do I not $watch these? I am dumb.
    $scope.$watch('$ctrl.dataset', newVal => {
      if (newVal) {
        this.percentage = this.dataset
          .filter(i => i.home === this.home && i.away === this.away)
          .map(i => i.outcome)[0];
        this.makeBackground(this.percentage, this.stats);
      }
    });
    $scope.$watch('$ctrl.alwaysVisible', newVal => {
      if (newVal) {
        this.show();
      } else {
        this.hide();
      }
    });
  }
  show() {
    this.visible = true;
  }
  hide() {
    this.visible = this.alwaysVisible;
  }
  visibleOrPercentage() {
    return this.visible ? this.percentage : '';
  }

  makeBackground(outcome, stats) {
    var index = Math.round((outcome - stats.min) / stats.max * (5));
    this.priorityLevel = `priority-level-${index + 1}`;
  }
}

let squareCell = {
  template: `<div ng-mouseenter="$ctrl.show()" 
              ng-mouseleave="$ctrl.hide()"
              ng-class="$ctrl.priorityLevel"
              ng-bind="$ctrl.visibleOrPercentage()">
            </div>`,
  bindings: {
    home: '=',
    away: '=',
    dataset: '=',
    stats: '=',
    alwaysVisible: '='
  },
  controller: SquareCellController
};

export default squareCell;
