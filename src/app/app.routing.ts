
import {AviationHomeComponent} from './aviation/aviation-home/aviation-home.component';
import {RouterModule, Routes} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';

const appRoutes: Routes = [
  {path: 'home', component: AviationHomeComponent},
  {path: 'navbarTest', component: NavbarComponent},
  {path: '', component: AviationHomeComponent},
  {path: '**', redirectTo: '' }
 ];
export const routing = RouterModule.forRoot(appRoutes);
