;
import { SubscriptionComponent } from './subscription/subscription.component'import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './logging-in/login/login.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { FlightComponent } from './flight/flight.component';
import { MapComponent } from './map/map.component';
import { [nameOfComponent]Component } from './[name-of-component]/[name-of-component].component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CalendarComponent,
    NavbarComponent,
    FlightComponent,
    MapComponent,
    [nameOfComponent]Component, SubscriptionComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
