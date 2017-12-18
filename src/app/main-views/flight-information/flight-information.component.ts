import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/users/user.model';
import {TokenService} from '../../shared/login/shared/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.component.html',
  styleUrls: ['./flight-information.component.css']
})
export class FlightInformationComponent implements OnInit {

  user: User;
  constructor(private tokServ: TokenService, private router: Router) { }

  ngOnInit() {
    this.checkUser();
  }
  checkUser() {
    if (typeof this.user === 'undefined') {
      if (localStorage.getItem('token')) {
        this.tokServ.getUserFromToken().subscribe(outputUser => {
          this.user = outputUser;
        });
      }
      else {
        this.router.navigateByUrl('/login');
      }
    }
  }

}
