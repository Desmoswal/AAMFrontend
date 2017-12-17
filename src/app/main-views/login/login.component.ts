import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {LoginService} from '../../shared/login/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginGroup: FormGroup;
  constructor(private loginServ: LoginService,
              private router: Router) {
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
  }

  login() {
    this.loginServ.login(this.loginGroup.value).subscribe(token => {
      if (token) {
        this.router
          .navigateByUrl('/home');
      } else {

      }
    });
  }
}
