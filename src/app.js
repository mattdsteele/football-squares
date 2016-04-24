import angular from 'angular';
import upgradeAdapter from './adapter';

import datasets from './datasets';
import Data from './data';
import squares from './squares';
import squareCell from './square-cell';

const app = angular.module('squares', [])
  .service('Datasets', datasets)
  .service('Data', Data)
  .component('squareCell', squareCell)
  .component('superbowlSquares', squares);

export default app;
