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
          <input type="checkbox" id="allNumbers" ng-model="superbowlSquares.allNumbers"
          ng-change="superbowlSquares.showAllNumbers()">
          <label for="allNumbers">Show all numbers</label>
        </span>
        <select id="dataset"
          ng-options="option as option.name for option in superbowlSquares.datasets"
          ng-model="superbowlSquares.dataset"
          ng-change="superbowlSquares.updateDataset()">
          <option value="">Dataset</option>
        </select>
        <table id="squares">
          <thead>
            <tr><td></td>
              <td ng-repeat="column in [0,1,2,3,4,5,6,7,8,9] track by $index">
                <input id="away-{{$index}}" type="number" ng-model="superbowlSquares.columns[column]" min="0" max="9">
              </td>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="row in [0,1,2,3,4,5,6,7,8,9] track by $index">
              <td><input id="home-{{$index}}" type="number" ng-model="superbowlSquares.rows[row]" min="0" max="9"></td>
              <td ng-repeat="column in [0,1,2,3,4,5,6,7,8,9] track by $index">
                <square-cell 
                  dataset="superbowlSquares.data" 
                  stats="superbowlSquares.stats"
                  home="superbowlSquares.rows[row]" 
                  away="superbowlSquares.columns[column]"
                  always-visible="superbowlSquares.allNumbers">
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
