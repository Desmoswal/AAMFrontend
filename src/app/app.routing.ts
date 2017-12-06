
import {HomeComponent} from './aviation-home/home.component';
import {RouterModule, Routes} from '@angular/router';
import {FlightComponent} from './flight/flight.component';
import {LoginComponent} from './logging-in/login/login.component';
const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'f', component: FlightComponent},
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: '' }
 ];
export const routing = RouterModule.forRoot(appRoutes);
