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

  loading = false;
  loginGroup: FormGroup;
  errormessage = '';

  constructor(private loginServ: LoginService,
              private router: Router) {
    this.loginGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit() {
    this.loginServ.logout().subscribe();
  }

  login() {
    this.loading = true;
    this.loginServ.login(this.loginGroup.value).subscribe(token => {
      if (token) {
        this.router
          .navigateByUrl('/home');
      } else {
        this.errormessage = 'Wrong username or password!';
        this.loading = false;
      }
    });
  }
}
