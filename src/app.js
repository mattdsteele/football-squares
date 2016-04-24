import angular from 'angular';
import upgradeAdapter from './adapter';

import Datasets from './datasets';
import Data from './data';
import squares from './squares';
import squareCell from './square-cell';
import SuperbowlApp from './superbowl-app.component';

upgradeAdapter.addProvider(Data);
upgradeAdapter.addProvider(Datasets);

const app = angular.module('squares', [])
  .factory('Datasets', upgradeAdapter.downgradeNg2Provider(Datasets))
  .factory('Data', upgradeAdapter.downgradeNg2Provider(Data))
  .directive('superbowlApp', upgradeAdapter.downgradeNg2Component(SuperbowlApp))
  .component('squareCell', squareCell)
  .component('superbowlSquares', squares);

export default app;
