import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {DatePipe} from '@angular/common';
import {Leg} from '../../../shared/legs/leg.model';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {User} from '../../../shared/users/user.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit {

  _bookingButton: boolean;
  @Input() flight: Flight;
  _user: User;
  @Input() set user(user: User) {
    this._user = user;
  }
  @Input() set bookingButton(button: boolean) {
    this._bookingButton = button;
  }
  legs: Leg[];
  _departureTime: Date;
  _departureDate: string;

  constructor(private router: Router, private datePipe: DatePipe) {

  }

  ngOnInit() {
    this.checkLegs();
  }

  checkLegs() {
    if (this.flight.legs !== null) {
      this.legs = this.flight.legs;
      this._departureTime = new Date(this.legs[0].toff);
      const dp = new DatePipe('da-DK');
      this._departureDate = dp.transform(this._departureDate, 'yyyyMMdd');
    }
  }

  createReservation() {
    this.router.navigate(['/resdet'], {queryParams: {d: this._departureDate, f: this.flight.id, u: this._user.id}});
  }
}



