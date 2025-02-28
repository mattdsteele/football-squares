import { Component } from '@angular/core';
import { FootballSquaresComponent } from './football-squares/football-squares/football-squares.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [FootballSquaresComponent]
})
export class AppComponent {
  title = 'app';
}
