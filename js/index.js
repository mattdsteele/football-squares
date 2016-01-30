import angular from 'angular';
import 'reflect-metadata';
import { UpgradeAdapter } from 'angular2/upgrade';

import header from './header';
import app from './app';

angular.module('superbowl-squares', [header.name, app.name]);

const upgradeAdapter = new UpgradeAdapter();
angular.element(document.body).ready(() => {
  upgradeAdapter.bootstrap(document.body, ['superbowl-squares']);
});

