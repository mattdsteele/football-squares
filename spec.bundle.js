import 'angular';
import 'angular-mocks';

import 'es6-shim';
import 'reflect-metadata';

let context = require.context('./src', true, /\.spec\.js/);

context.keys().forEach(context);

