import {Injectable} from '@angular/core';
import {TokenService} from '../shared/token.service';
import {LoginService} from '../shared/login.service';
import {CanActivate, Router} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private tokenServ: TokenService,
              private loginServ: LoginService) {
  }

  canActivate(): any {
    return this.tokenServ.isAuthenticated().take(1).map(authenticated => {
      if (authenticated) {
        return true;
      } else {
        // not logged in so redirect to login page with the return url
        this.router.navigateByUrl('/login');
        return false;
      }
    });
  }
}
