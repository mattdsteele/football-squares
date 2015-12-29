class SquareCellController {
  constructor($scope, $element) {
    this.colors = ["CCFFFF", "52FFFF", "BF00FF", "FF00BF", "FF0040", "FF4000"]
    this.visible = this.alwaysVisible;

    //Hey, how do I not $watch these? I am dumb.
    $scope.$watch('squareCell.dataset', newVal => {
      if (newVal) {
        this.percentage = this.dataset
          .filter(i => i.home === this.home && i.away === this.away)
          .map(i => i.outcome)[0];
          this.makeBackground($element, this.percentage, this.stats);
      }
    });
    $scope.$watch('squareCell.alwaysVisible', newVal => {
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

  makeBackground($element, outcome, stats) {
    var index = Math.round((outcome - stats.min) / stats.max * (this.colors.length - 1));
    $element.css('background-color', `#${this.colors[index]}`);
  }
}

let squareCell = {
  template: `<div ng-mouseenter="squareCell.show()" 
              ng-mouseleave="squareCell.hide()"
              ng-bind="squareCell.visibleOrPercentage()">
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
