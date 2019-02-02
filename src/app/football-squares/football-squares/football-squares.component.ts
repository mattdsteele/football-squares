import { Component } from '@angular/core';

@Component({
  selector: 'app-football-squares',
  styleUrls: ['./football-squares.component.css'],
  template: `
    <superbowl-header>
      <div class="header-lede">Super Bowl</div>
      <div class="header-subhead">Squares</div>
    </superbowl-header>
    <app-superbowl-squares></app-superbowl-squares>
  `
})
export class FootballSquaresComponent {}
