import { Component } from 'angular2/core';

@Component({
  selector: 'superbowl-header',
  template: `
    <div id="header">
      <h1>
        <ng-content select="header-lede"></ng-content>
        <ng-content select="header-sub"></ng-content>
      </h1>
    </div>
  `
})
class SuperbowlHeader { }

export default SuperbowlHeader;
