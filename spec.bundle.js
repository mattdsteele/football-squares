import 'angular';
import 'angular-mocks';

import 'es6-shim';
import 'reflect-metadata';

// This is not working! See http://stackoverflow.com/q/36827715/27557
import 'angular2/src/core/di';
import test from 'angular2/testing';
import browser from 'angular2/platform/testing/browser';

test.setBaseTestProviders(browser.TEST_BROWSER_PLATFORM_PROVIDERS,
                          browser.TEST_BROWSER_APPLICATION_PROVIDERS);

let context = require.context('./src', true, /\.spec\.js/);

context.keys().forEach(context);

