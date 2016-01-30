import { Component } from 'angular2/core';
import upgradeAdapter from './adapter';
import SuperbowlHeader from './header';

const SuperbowlSquares = upgradeAdapter.upgradeNg1Component('superbowlSquares');

@Component({
  selector: 'superbowl-app',
  directives: [SuperbowlHeader, SuperbowlSquares],
  template: `
    <superbowl-header>
      <header-lede>Super Bowl</header-lede>
      <header-sub>Squares</header-sub>
    </superbowl-header>
    <superbowl-squares></superbowl-squares>
  `
})
class SuperbowlApp { }

export default SuperbowlApp;
