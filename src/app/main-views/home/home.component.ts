import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/users/user.model';
import {LoginService} from '../../shared/login/shared/login.service';
import {TokenService} from '../../shared/login/shared/token.service';
import {JwtHelper} from 'angular2-jwt';
import {AuthGuard} from '../../shared/login/auth/auth.guard';
import {UserService} from '../../shared/users/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-aviation-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(private loginServ: LoginService, private userServ: UserService, private tokenServ: TokenService) {
    this.user = this.loginServ.currentUser;
  }

  ngOnInit() {
  }


}
