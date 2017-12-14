import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {FlightService} from '../../../shared/flights/flight.service';
import {DatePipe} from '@angular/common';
import {getType} from '@angular/core/src/errors';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: Flight[];
  loading = false;
  noFlights = false;
  @Input() inputDate: Date;
  @Input() getType: number;

  @Input() inputFlights;


  constructor(private flightServ: FlightService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.loading = true;

    //getType of 1 means to get by date
    if (this.getType === 1) {
      this.flightServ.getByDate(this.datePipe.transform(this.inputDate, 'yyyyMMdd')).subscribe(
        flight => {
          this.loading = false;
          this.flights = flight;
          if (flight.length === 0) {
            this.noFlights = true;
          }
        }
      );
    }

    //get by userId
    if (this.getType === 2) {

    }
    //get all flights
    if (this.getType === 3) {
      this.flightServ.getAll().subscribe(
        flight => {
          this.loading = false;
          this.flights = flight;
          if (flight.length === 0) {
            this.noFlights = true;
          }
        }
      );
    }

    //when the list of flights are already provided
    else {
      this.flights = this.inputFlights;
    }

  }
}
