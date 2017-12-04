import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './logging-in/login/login.component';
import { ScheduledFlightsComponent } from './aviation/flights/scheduled-flights/scheduled-flights.component';
import { FlightwatchComponent } from './aviation/flights/flightwatch/flightwatch.component';
import { AviationHomeComponent } from './aviation/aviation-home/aviation-home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightComponent } from './flight/flight.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ScheduledFlightsComponent,
    FlightwatchComponent,
    AviationHomeComponent,
    CalendarComponent,
    NavbarComponent,
    FlightComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
