import angular from 'angular';
import upgradeAdapter from './adapter';

// Angular 2 components
import SuperbowlApp from './superbowl-app.component';
import SquareCell from './square-cell';
import Datasets from './datasets';
import Data from './data';

// Angular 1 components
import squares from './squares';

upgradeAdapter.addProvider(Data);
upgradeAdapter.addProvider(Datasets);

const app = angular.module('squares', [])
  .factory('Datasets', upgradeAdapter.downgradeNg2Provider(Datasets))
  .factory('Data', upgradeAdapter.downgradeNg2Provider(Data))
  .directive('superbowlApp', upgradeAdapter.downgradeNg2Component(SuperbowlApp))
  .directive('squareCell', upgradeAdapter.downgradeNg2Component(SquareCell))
  .component('superbowlSquares', squares);

export default app;
