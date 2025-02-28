import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SuperbowlSquaresComponent } from '../superbowl-squares/superbowl-squares.component';

@Component({
    selector: 'app-football-squares',
    styleUrls: ['./football-squares.component.css'],
    template: `
    <superbowl-header>
      <div class="header-lede">Super Bowl</div>
      <div class="header-subhead">Squares</div>
    </superbowl-header>
    <app-superbowl-squares></app-superbowl-squares>
  `,
    imports: [HeaderComponent, SuperbowlSquaresComponent]
})
export class FootballSquaresComponent {}
