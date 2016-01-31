import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';

import angular from 'angular';
import upgradeAdapter from './adapter.js';

import app from './app';

angular.module('superbowl-squares', [app.name]);

angular.element(document.body).ready(() => {
  upgradeAdapter.bootstrap(document.body, ['superbowl-squares']);
});

