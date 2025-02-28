import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FootballSquaresModule } from './football-squares/football-squares.module';

@NgModule({
  declarations: [AppComponent],
  imports: [FootballSquaresModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
