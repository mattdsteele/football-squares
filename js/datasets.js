import { Injectable } from 'angular2/core';

@Injectable()
class Datasets {
  constructor() {
    this.datasets = [
      { id: 'quarter1', name: 'Quarter 1' },
      { id: 'quarter2', name: 'Quarter 2' },
      { id: 'quarter3', name: 'Quarter 3' },
      { id: 'superbowl', name: 'Super Bowl' },
      { id: 'scores', name: 'All Games' },
    ];
  }
}
export default Datasets;
