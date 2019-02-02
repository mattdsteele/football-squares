import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FootballSquaresModule } from './football-squares/football-squares.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// let imports: any[] = [FootballSquaresModule, BrowserModule];
// if (environment.production) {
//   imports = [...imports, AkitaNgDevtools.forRoot()];
// }
@NgModule({
  declarations: [AppComponent],
  imports: [FootballSquaresModule, BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
