import angular from 'angular';
import 'reflect-metadata';
import 'zone.js';

import header from './header';
import app from './app';
import upgradeAdapter from './adapter';

angular.module('superbowl-squares', [header.name, app.name]);

upgradeAdapter.bootstrap(document.documentElement, ['superbowl-squares']);

