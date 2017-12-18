import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {TokenService} from '../../shared/login/shared/token.service';
import {LoginService} from '../../shared/login/shared/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuth: boolean;
  isPlanner: boolean;
  date: string;

  constructor(private datePipe: DatePipe, private tokeServ: TokenService, private loginServ: LoginService) {
  }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(), 'yyyyMMdd');
    this.tokeServ.isAuthenticated().subscribe(auth => this.isAuth = auth);
    if (this.isAuth) {
      this.tokeServ.getUserFromToken().subscribe(user => {
        if (user.type === 1) {
          this.isPlanner = true;
        }
        else {
          this.isPlanner = false;
        }

      });
    }
  }

  logout() {
    this.loginServ.logout().subscribe();
  }

}
