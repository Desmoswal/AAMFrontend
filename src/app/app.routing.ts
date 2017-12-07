
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FlightComponent} from './flight/flight.component';
import {LoginComponent} from './logging-in/login/login.component';
import {CalendarComponent} from './calendar/calendar.component';
import {MapComponent} from './map/map.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'flight', component: FlightComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'map', component: MapComponent},
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: '' }
 ];
export const routing = RouterModule.forRoot(appRoutes);
