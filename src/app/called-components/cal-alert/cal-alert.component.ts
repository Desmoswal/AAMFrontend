import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {FlightService} from '../../shared/flights/flight.service';
import {isBoolean} from 'util';
import {DatePipe} from '@angular/common';
import {Flight} from '../../shared/flights/flight.model';
import {User} from '../../shared/users/user.model';
import {TokenService} from '../../shared/login/shared/token.service';

@Component({
  selector: 'app-cal-alert',
  templateUrl: './cal-alert.component.html',
  styleUrls: ['./cal-alert.component.css']
})
export class CalAlertComponent implements OnInit {
  user: User;
  _dateString: string;
  _displayDate: string;
  _hasFlights: boolean = false;
  flights: Flight[];

  @Input() set recievedDate(date: Date) {

    if (typeof date === 'undefined') {
      this.setDate();
    }
    else {
      this._dateString = this.datePipe.transform(date, 'yyyyMMdd');
      this._displayDate = this._dateString.slice(0, 4) + '-' + this._dateString.slice(4, 6) + '-' + this._dateString.slice(6);
      this.dateHasFlights();
    }
  }

  constructor(private route: ActivatedRoute,
              private datePipe: DatePipe,
              private flightServ: FlightService, private tokServ: TokenService, private router: Router) {
  }

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

  setDate() {
    this.route.queryParams.subscribe(params => {
      this._dateString = params.date;
      this.dateHasFlights();
    });
  }

  dateHasFlights() {
    this.flightServ.getByDate(this._dateString).subscribe(
      flights => {
        if (flights.length === 0) {
          this._hasFlights = false;
        }
        else {
          this.flights = flights;
          this._hasFlights = true;
        }
      });

  }
}
