import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FootballSquaresModule } from './football-squares/football-squares.module';

// let imports: any[] = [FootballSquaresModule, BrowserModule];
// if (environment.production) {
//   imports = [...imports, AkitaNgDevtools.forRoot()];
// }
@NgModule({
  declarations: [AppComponent],
  imports: [FootballSquaresModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
