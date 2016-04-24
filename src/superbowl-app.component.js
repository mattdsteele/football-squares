import { Component } from 'angular2/core';
import upgradeAdapter from './adapter';

import Header from './header';
const SuperbowlSquares = upgradeAdapter.upgradeNg1Component('superbowlSquares');

@Component({
  selector: 'superbowl-app',
  directives: [Header, SuperbowlSquares],
  template: `
    <superbowl-header>
      <header-lede>Super Bowl</header-lede>
      <header-subhead>Squares</header-subhead>
    </superbowl-header>
    <superbowl-squares></superbowl-squares>
  `
})
class SuperbowlApp {
}

export default SuperbowlApp;
