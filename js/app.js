import angular from 'angular';
import squares from './squares';

let app = angular.module('squares', [])
  .component('superbowlSquares', squares);
