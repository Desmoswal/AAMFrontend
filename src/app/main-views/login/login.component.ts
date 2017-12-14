import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  errormessage = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
    // reset login status
    //this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    // this.authenticationService.login(this.model.username, this.model.password)
    //   .subscribe(
    //     success => {
    //       this.router.navigate(['/home']);
    //     },
    //     error => {
    //       this.errormessage = 'Wrong username or password!';
    //       this.loading = false;
    //     });
  }
}
