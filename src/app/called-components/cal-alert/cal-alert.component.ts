import {Component, Input, OnInit} from '@angular/core';
import {DateStringService} from '../../shared/date-string-service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {FlightService} from '../../shared/flights/flight.service';
import {isBoolean} from 'util';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-cal-alert',
  templateUrl: './cal-alert.component.html',
  styleUrls: ['./cal-alert.component.css']
})
export class CalAlertComponent implements OnInit {

  protected _dateString: string;
  protected recDate: Date;

  constructor(private dateServ: DateStringService,
              private route: ActivatedRoute,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
  }

  @Input() set recievedDate(date: Date) {

    if (date != null) {
      this._dateString = this.datePipe.transform(date, 'yyyyMMdd');
    }
    else {
      this.route.queryParams.subscribe(params => {
        this._dateString = params.date;
      });
    }
  }

  dateHasFlights() {
    return false;
  }
}
