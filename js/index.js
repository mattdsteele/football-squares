import 'reflect-metadata';
import 'zone.js/dist/zone-microtask';

import { bootstrap } from 'angular2/platform/browser';
import { enableProdMode } from 'angular2/core';

import SuperbowlApp from './superbowl-app';

//enableProdMode();
bootstrap(SuperbowlApp);

