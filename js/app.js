import angular from 'angular';

import datasets from './datasets';
import Data from './data';
import squares from './squares';

let app = angular.module('squares', [])
  .service('Datasets', datasets)
  .service('Data', Data)
  .component('superbowlSquares', squares);
