import {SubscriptionComponent} from './called-components/subscription/subscription/subscription.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './main-views/login/login.component';
import {HomeComponent} from './main-views/home/home.component';
import {CalendarComponent} from './called-components/calendar/calendar.component';
import {CalendarModule} from 'angular-calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routing} from './app.routing';
import {NavbarComponent} from './called-components/navbar/navbar.component';
import {FlightComponent} from './called-components/flights/flight/flight.component';
import {MapComponent} from './called-components/map/map.component';
import {SubscriptionListComponent} from './called-components/subscription/subscription-list/subscription-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ReserveFlightComponent} from './main-views/reserve-flight/reserve-flight.component';
import {FlightInformationComponent} from './main-views/flight-information/flight-information.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {LegComponent} from './called-components/legs/leg/leg.component';
import {CommonModule, DatePipe} from '@angular/common';
import {FlightListComponent} from './called-components/flights/flight-list/flight-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CalAlertComponent} from './called-components/cal-alert/cal-alert.component';
import {FlightService} from './shared/flights/flight.service';
import {NoFlightAlertComponent} from './called-components/no-flight-alert/no-flight-alert.component';
import {SubscriptionService} from './shared/subscriptions/subscription.service';
import {ReserveFormDetailComponent} from './main-views/reserve-form-detail/reserve-form-detail.component';
import {EmailService} from './shared/email/email.service';
import {LegListComponent} from './called-components/legs/leg-list/leg-list.component';
import {AgmCoreModule} from '@agm/core';
import {TokenService} from './shared/login/shared/token.service';
import {LoginService} from './shared/login/shared/login.service';
import {LoginInterceptor} from './shared/login/interceptors/login.interceptor';
import {AuthGuard} from './shared/login/auth/auth.guard';
import {PlannerGuard} from './shared/login/auth/planner.guard';
import {UserService} from './shared/users/user.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import { SearchPipe } from './called-components/flights/flight-list/search.pipe';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,   canActivate: [AuthGuard]},
  {path: 'reserve', component: ReserveFlightComponent},
  {path: 'info', component: FlightInformationComponent},
  {path: '', component: LoginComponent},
  {path: 'map', component: MapComponent},
  {path: 'resdet', component: ReserveFormDetailComponent},
  {path: '**', redirectTo: ''}
];

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
    CalAlertComponent,
    NoFlightAlertComponent,
    LegListComponent,
    ReserveFormDetailComponent,
    SearchPipe
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CommonModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBdpXUElCLoC1Nf397cIzvM64Ho9YdXxxk'
    })
  ],
  providers: [
    FlightService,
    SubscriptionService,
    DatePipe,
    EmailService,
    TokenService,
    LoginService,
    AuthGuard,
    PlannerGuard,
    UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
