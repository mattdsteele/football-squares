import angular from 'angular';

import Datasets from './datasets';
import Data from './data';
import squares from './squares';
import squareCell from './square-cell';

import upgradeAdapter from './adapter.js';
upgradeAdapter.addProvider(Datasets);
upgradeAdapter.addProvider(Data);

let app = angular.module('squares', [])
  .factory('Data', upgradeAdapter.downgradeNg2Provider(Data))
  .factory('Datasets', upgradeAdapter.downgradeNg2Provider(Datasets))
  .component('squareCell', squareCell)
  .component('superbowlSquares', squares);

export default app;
