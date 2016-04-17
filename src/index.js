import header from './header';
import app from './app';
import upgradeAdapter from './adapter';

import angular from 'angular';
import 'reflect-metadata';
import 'zone.js';

angular.module('superbowl-squares', [header.name, app.name]);

upgradeAdapter.bootstrap(document.documentElement, ['superbowl-squares']);

