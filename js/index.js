import angular from 'angular';
import 'reflect-metadata';
import upgradeAdapter from './adapter.js';

import header from './header';
import app from './app';

angular.module('superbowl-squares', [header.name, app.name]);

angular.element(document.body).ready(() => {
  upgradeAdapter.bootstrap(document.body, ['superbowl-squares']);
});

