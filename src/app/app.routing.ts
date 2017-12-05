
import {AviationHomeComponent} from './aviation-home/aviation-home.component';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {FlightComponent} from './flight/flight.component';
import {LoginComponent} from './logging-in/login/login.component';
import {MapComponent} from './map/map.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: AviationHomeComponent},
  {path: 'test', component: FlightComponent},
  {path: 'map', component: MapComponent},
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: '' }
 ];
export const routing = RouterModule.forRoot(appRoutes);
