import {HomeComponent} from './main-views/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './main-views/login/login.component';
import {ReserveFlightComponent} from './main-views/reserve-flight/reserve-flight.component';
import {FlightInformationComponent} from './main-views/flight-information/flight-information.component';
import {ReserveFormDetailComponent} from './main-views/reserve-form-detail/reserve-form-detail.component';
import {MapComponent} from './called-components/map/map.component';
import {AuthGuard} from './shared/login/auth/auth.guard';

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
export const routing = RouterModule.forRoot(appRoutes);
