import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/users/user.model';
import {LoginService} from '../../shared/login/shared/login.service';
import {TokenService} from '../../shared/login/shared/token.service';
import {JwtHelper} from 'angular2-jwt';
import {AuthGuard} from '../../shared/login/auth/auth.guard';
import {UserService} from '../../shared/users/user.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {UserAuth} from '../../shared/login/shared/userAuth.model';

@Component({
  selector: 'app-aviation-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  _user: User;


  constructor(private tokServ: TokenService,
              private userServ: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.checkUser();
  }

  checkUser() {
    if (typeof this._user === 'undefined') {
      if (localStorage.getItem('token')) {
        this.tokServ.getUserFromToken().subscribe(outputUser => {
          this._user = outputUser;
        });
      }
      else {
        this.router.navigateByUrl('/login');
      }
    }
  }
}
