import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {TokenService} from '../shared/token.service';
import {User} from '../../users/user.model';
import {LoginService} from '../shared/login.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private tokenService: TokenService,
              private loginServ: LoginService) {
  }

  canActivate(): any {
    if (this.loginServ.currentUser)
      return true;
    // return this.tokenService.getUserFromToken().take(1).map(authUser => {
    //   if (authUser) {
    //     return true;
    //   } else {
    //     // not logged in so redirect to login page with the return url
    //     this.router.navigateByUrl('/login');
    //     return false;
    //   }
    // });
  }
}
