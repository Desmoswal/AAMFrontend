
import { SubscriptionComponent } from './called-components/subscription/subscription/subscription.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './main-views/login/login.component';
import { HomeComponent } from './main-views/home/home.component';
import { CalendarComponent } from './called-components/calendar/calendar.component';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';

import { NavbarComponent } from './called-components/navbar/navbar.component';
import { FlightComponent } from './called-components/flight/flight.component';
import { MapComponent } from './called-components/map/map.component';
import { SubscriptionListComponent } from './called-components/subscription/subscription-list/subscription-list.component';
import {FormsModule} from '@angular/forms';
import { ReserveFlightComponent } from './main-views/reserve-flight/reserve-flight.component';
import { FlightInformationComponent } from './main-views/flight-information/flight-information.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LegComponent } from './called-components/leg/leg.component';
import {CommonModule} from '@angular/common';
import { FlightListComponent } from './called-components/flight-list/flight-list.component';
import {FlightService} from './shared/flights/flight.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { CalAlertComponent } from './called-components/cal-alert/cal-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CalendarComponent,
    NavbarComponent,
    FlightComponent,
    MapComponent,
    SubscriptionComponent,
    SubscriptionListComponent,
    ReserveFlightComponent,
    FlightInformationComponent,
    LegComponent,
    FlightListComponent,
    CalAlertComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    routing,
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [FlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
