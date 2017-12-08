
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
    FlightInformationComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
