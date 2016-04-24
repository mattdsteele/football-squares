import angular from 'angular';
import 'reflect-metadata';
import 'zone.js';

import Header from './header';
import app from './app';
import upgradeAdapter from './adapter';


// Migrated header code goes here
angular.module('header', [])
.directive('superbowl-header', upgradeAdapter.downgradeNg2Component(Header));

angular.module('superbowl-squares', ['header', app.name]);

upgradeAdapter.bootstrap(document.documentElement, ['superbowl-squares']);

