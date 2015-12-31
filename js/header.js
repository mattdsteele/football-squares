import angular from 'angular';

let header = angular.module('header', [])
.component('superbowlHeader', {
  transclude: {
    'lede': 'lede',
    'subhead': 'subhead'
  },
  template: `
    <div id="header">
      <h1>
        <div class="header-1" ng-transclude="lede"></div>
        <div class="header-2" ng-transclude="subhead"></div>
      </h1>
    </div>
  `
});

export default header;
