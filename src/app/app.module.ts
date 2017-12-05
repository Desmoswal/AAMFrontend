import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './logging-in/login/login.component';
import { ScheduledFlightsComponent } from './flights/scheduled-flights/scheduled-flights.component';
import { FlightwatchComponent } from './flights/flightwatch/flightwatch.component';
import { AviationHomeComponent } from './aviation-home/aviation-home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightComponent } from './flight/flight.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';

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
    MapComponent,
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdpXUElCLoC1Nf397cIzvM64Ho9YdXxxk\n',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
