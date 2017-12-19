import {HomeComponent} from './main-views/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './main-views/login/login.component';
import {ReserveFlightComponent} from './main-views/reserve-flight/reserve-flight.component';
import {FlightInformationComponent} from './main-views/flight-information/flight-information.component';
import {ReserveFormDetailComponent} from './main-views/reserve-form-detail/reserve-form-detail.component';
import {MapComponent} from './called-components/map/map.component';
import {AuthGuard} from './shared/login/auth/auth.guard';
import {PlannerGuard} from './shared/login/auth/planner.guard';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'reserve', component: ReserveFlightComponent, canActivate: [AuthGuard, PlannerGuard]},
  {path: 'info', component: FlightInformationComponent, canActivate: [AuthGuard, PlannerGuard]},
  {path: '', component: LoginComponent},
  {path: 'map', component: MapComponent},
  {path: 'resdet', component: ReserveFormDetailComponent, canActivate: [AuthGuard, PlannerGuard]},
  {path: '**', redirectTo: ''}
];
export const routing = RouterModule.forRoot(appRoutes);
