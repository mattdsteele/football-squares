import { Component } from 'angular2/core';

import Squares from './squares.component';
import Header from './header.component';

@Component({
  selector: 'superbowl-app',
  directives: [Header, Squares],
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
