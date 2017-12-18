import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatePipe} from '@angular/common';
import {TokenService} from '../../shared/login/shared/token.service';
import {LoginService} from '../../shared/login/shared/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isPlanner: boolean;
  date: string;
  @Input() loggedIn: boolean;
  @Output() LogOut = new EventEmitter();

  constructor(private datePipe: DatePipe, private tokeServ: TokenService, private loginServ: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(), 'yyyyMMdd');
    this.tokeServ.isAuthenticated().subscribe(auth => this.loggedIn = auth);
    if (this.loggedIn) {
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
    this.loginServ.logout().subscribe(logoutSuccess => {
      this.LogOut.emit(this.loggedIn = false);
      this.LogOut.emit(this.isPlanner = false);
      this.router.navigateByUrl('/login');
    });

  }

}
