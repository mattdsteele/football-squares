import angular from 'angular';

//Angular 2 services
import Datasets from './datasets';
import Data from './data';

//Angular 2 components
import SuperbowlApp from './superbowl-app';
import SuperbowlHeader from './header';

//Angular 1 components
import squares from './squares';
import squareCell from './square-cell';

import upgradeAdapter from './adapter.js';
upgradeAdapter.addProvider(Datasets);
upgradeAdapter.addProvider(Data);

let app = angular.module('squares', [])
  .factory('Data', upgradeAdapter.downgradeNg2Provider(Data))
  .factory('Datasets', upgradeAdapter.downgradeNg2Provider(Datasets))
  .directive('superbowlApp', upgradeAdapter.downgradeNg2Component(SuperbowlApp))
  .directive('superbowlHeader', upgradeAdapter.downgradeNg2Component(SuperbowlHeader))
  .component('squareCell', squareCell)
  .component('superbowlSquares', squares);

export default app;
