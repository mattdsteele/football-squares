let getMinAndMax = (data) => {
  let sortedData = data.map(x => x.outcome)
  .sort((a, b) => a - b);
  let [ min, max ] = [sortedData[0], sortedData[sortedData.length - 1]];
  let deltas = 6,
    diff = (max - min) / deltas;
    return { min, max, diff, deltas };
};

class SquaresController {
  constructor(Datasets, Data) {
    this.datasets = Datasets.datasets;
    this.Data = Data;
    this.rows = [0,1,2,3,4,5,6,7,8,9];
    this.columns = [0,1,2,3,4,5,6,7,8,9];
  }

  updateDataset() {
    if (this.dataset) {
      this.data = this.Data.get(this.dataset.id);
      this.stats = getMinAndMax(this.data);
    }
  }
}

let SquaresComponent = {
  template: `
    <div id="container">
      <form id="squares-form">
        <span id="allNumbersCheck">
          <input type="checkbox" id="allNumbers" ng-model="$ctrl.allNumbers"
          ng-change="$ctrl.showAllNumbers()">
          <label for="allNumbers">Show all numbers</label>
        </span>
        <select id="dataset"
          ng-options="option as option.name for option in $ctrl.datasets"
          ng-model="$ctrl.dataset"
          ng-change="$ctrl.updateDataset()">
          <option value="">Dataset</option>
        </select>
        <table id="squares">
          <thead>
            <tr><td></td>
              <td ng-repeat="column in [0,1,2,3,4,5,6,7,8,9] track by $index">
                <input id="away-{{$index}}" type="number" ng-model="$ctrl.columns[column]" min="0" max="9">
              </td>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="row in [0,1,2,3,4,5,6,7,8,9] track by $index">
              <td><input id="home-{{$index}}" type="number" ng-model="$ctrl.rows[row]" min="0" max="9"></td>
              <td ng-repeat="column in [0,1,2,3,4,5,6,7,8,9] track by $index">
                <square-cell 
                  [score-data]="$ctrl.data"
                  [stats]="$ctrl.stats"
                  [home]="$ctrl.rows[row]"
                  [away]="$ctrl.columns[column]"
                  [always-visible]="$ctrl.allNumbers">
                </square-cell>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  `,
  controller: SquaresController
};

export default SquaresComponent;
