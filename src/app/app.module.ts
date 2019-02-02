import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AppComponent } from './app.component';
import { FootballSquaresModule } from './football-squares/football-squares.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FootballSquaresModule,
    BrowserModule,
    environment.production ? null : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
