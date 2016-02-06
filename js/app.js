import angular from 'angular';

//Angular 2 services
import Datasets from './datasets';
import Data from './data';

//Angular 2 components
import SuperbowlApp from './superbowl-app';
import SuperbowlHeader from './header';
import SuperbowlSquares from './squares';

//Angular 1 components
import squareCell from './square-cell';

import upgradeAdapter from './adapter.js';

let app = angular.module('squares', [])
  .directive('superbowlApp', upgradeAdapter.downgradeNg2Component(SuperbowlApp))
  .directive('superbowlHeader', upgradeAdapter.downgradeNg2Component(SuperbowlHeader))
  .directive('squareCell', upgradeAdapter.downgradeNg2Component(squareCell))
  .directive('superbowlSquares', upgradeAdapter.downgradeNg2Component(SuperbowlSquares));

export default app;
