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
  @Input() isPlanner: boolean;
  @Input() loggedIn: boolean;
  @Output() LogOut = new EventEmitter();

  constructor(private loginServ: LoginService) {
  }

  ngOnInit() {
  }

  logout() {
    this.loginServ.logout().subscribe(logoutSuccess => {
      this.LogOut.emit(this.loggedIn = false);
      this.LogOut.emit(this.isPlanner = false);
    });

  }

}
