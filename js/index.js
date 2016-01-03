import angular from 'angular';

import header from './header';
import app from './app';

angular.module('superbowl-squares', [header.name, app.name]);

angular.bootstrap(document.documentElement, ['superbowl-squares']);

