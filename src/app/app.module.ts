import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './logging-in/login/login.component';
import { ScheduledFlightsComponent } from './aviation/flights/scheduled-flights/scheduled-flights.component';
import { FlightwatchComponent } from './aviation/flights/flightwatch/flightwatch.component';
import { AviationHomeComponent } from './aviation/aviation-home/aviation-home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScheduledFlightsComponent,
    FlightwatchComponent,
    AviationHomeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
