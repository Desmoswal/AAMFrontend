import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/users/user.model';
import {TokenService} from '../../shared/login/shared/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reserve-flight',
  templateUrl: './reserve-flight.component.html',
  styleUrls: ['./reserve-flight.component.css']
})
export class ReserveFlightComponent implements OnInit {
  _user: User;
  selectedDate: Date;

  constructor(private tokServ: TokenService, private router: Router) {
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

  receiveDate($event) {
    this.selectedDate = $event;
  }

}
