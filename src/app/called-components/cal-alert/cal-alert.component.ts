import {Component, Input, OnInit} from '@angular/core';
import {DateStringService} from '../../shared/date-string-service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {FlightService} from '../../shared/flights/flight.service';
import {isBoolean} from 'util';
import {DatePipe} from '@angular/common';
import {Flight} from '../../shared/flights/flight.model';
import {User} from '../../shared/users/user.model';

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

  constructor(private dateServ: DateStringService,
              private route: ActivatedRoute,
              private datePipe: DatePipe,
              private flightServ: FlightService) {
  }

  ngOnInit() {
    this.getUser();
  }

  //TODO need to change this method when we have authenication, so we get the user from the backend
  getUser() {
    this.user = new User();
    this.user.id = 1;
    this.user.type = 1;
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
