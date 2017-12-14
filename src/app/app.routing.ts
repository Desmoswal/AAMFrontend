import {HomeComponent} from './main-views/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './main-views/login/login.component';
import {ReserveFlightComponent} from './main-views/reserve-flight/reserve-flight.component';
import {FlightInformationComponent} from './main-views/flight-information/flight-information.component';
import {ReserveFormDetailComponent} from './main-views/reserve-form-detail/reserve-form-detail.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'reserve', component: ReserveFlightComponent},
  {path: 'info', component: FlightInformationComponent},
  {path: '', component: HomeComponent},
  {path: 'resdet', component: ReserveFormDetailComponent},
  {path: '**', redirectTo: ''}
];
export const routing = RouterModule.forRoot(appRoutes);
