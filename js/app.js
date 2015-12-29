import angular from 'angular';

import datasets from './datasets';
import Data from './data';
import squares from './squares';
import squareCell from './square-cell';

let app = angular.module('squares', [])
  .service('Datasets', datasets)
  .service('Data', Data)
  .component('squareCell', squareCell)
  .component('superbowlSquares', squares);
