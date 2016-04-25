import angular from 'angular';
import upgradeAdapter from './adapter';

// Angular 2 components
import SuperbowlApp from './superbowl-app.component';
import SquareCell from './square-cell';
import Squares from './squares';
import Datasets from './datasets';
import Data from './data';

upgradeAdapter.addProvider(Data);
upgradeAdapter.addProvider(Datasets);

const app = angular.module('squares', [])
  .factory('Datasets', upgradeAdapter.downgradeNg2Provider(Datasets))
  .factory('Data', upgradeAdapter.downgradeNg2Provider(Data))
  .directive('superbowlApp', upgradeAdapter.downgradeNg2Component(SuperbowlApp))
  .directive('squareCell', upgradeAdapter.downgradeNg2Component(SquareCell))
  .directive('superbowlSquares', upgradeAdapter.downgradeNg2Component(Squares));

export default app;
