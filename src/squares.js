import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

import Data from './data';
import Datasets from './datasets';
import SquareCell from './square-cell';

let getMinAndMax = (data) => {
  let sortedData = data.map(x => x.outcome)
  .sort((a, b) => a - b);
  let [ min, max ] = [sortedData[0], sortedData[sortedData.length - 1]];
  let deltas = 6,
    diff = (max - min) / deltas;
    return { min, max, diff, deltas };
};

@Component({
  selector: 'superbowl-squares',
  providers: [Data, Datasets],
  directives: [FORM_DIRECTIVES, SquareCell],
  template: `
    <div id="container">
      <form id="squares-form">
        <span id="allNumbersCheck">
          <input type="checkbox" id="allNumbers" [(ngModel)]="allNumbers" #allNums>
          <label for="allNumbers">Show all numbers</label>
        </span>
        <select id="dataset"
          (change)="updateDataset($event.target.value)">
          <option value="">Dataset</option>
          <option *ngFor="#option of datasets" [value]="option.id">{{option.name}}</option>
        </select>
        <table id="squares">
          <thead>
            <tr><td></td>
              <td *ngFor="#column of columns, #i=index">
                <input id="away-{{i}}" type="number" [(ngModel)]="columns[column]" min="0" max="9">
              </td>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="#row of rows, #i=index">
              <td><input id="home-{{i}}" type="number" [(ngModel)]="rows[row]" min="0" max="9"></td>
              <td *ngFor="#column of columns">
                <square-cell 
                  [scoreData]="data"
                  [stats]="stats"
                  [home]="rows[row]"
                  [away]="columns[column]"
                  [alwaysVisible]="allNumbers">
                </square-cell>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  `
})
class Squares {
  constructor(datasets: Datasets, data: Data) {
    this.datasets = datasets.datasets;
    this.Data = data;
    this.data = undefined;
    this.rows = [0,1,2,3,4,5,6,7,8,9];
    this.columns = [0,1,2,3,4,5,6,7,8,9];
    this.allNumbers = false;
    this.dataset = '';
  }

  updateDataset(value) {
    if (value) {
      this.data = this.Data.get(value);
      this.stats = getMinAndMax(this.data);
    }
  }
}

export default Squares;
