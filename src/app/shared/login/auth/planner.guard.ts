import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {TokenService} from '../shared/token.service';
import {LoginService} from '../shared/login.service';

@Injectable()
export class PlannerGuard implements CanActivate {

  constructor(private router: Router, private loginServ: LoginService, private tokenServ: TokenService) {
  }

  canActivate(): any {

    return this.tokenServ.getUserFromToken().take(1).map(user => {
      if (user.type === 1) {
        return true;
      } else {
        // not logged in so redirect to login page with the return url
        this.router.navigateByUrl('/accessdenied');
        return false;
      }
    });
  }
}
