import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {FlightService} from '../../../shared/flights/flight.service';
import {DatePipe} from '@angular/common';
import {getType} from '@angular/core/src/errors';
import {isNullOrUndefined} from 'util';
import {User} from '../../../shared/users/user.model';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  loading = false;
  flights: Flight[];
  //1 = get by today's date, 2 = get by specific date
  _getterType: number;
  @Input() user: User;

  @Input() set getType(getType: number) {
    this._getterType = getType;
  }

  noFlights = false;
  // @Input() inputDate: Date;
  // @Input() inputFlights;


  constructor(private flightServ: FlightService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.getFlights();
  }


  getFlights() {
    this.loading = true;

    //if it's a planner they can get all the flights or flight by date
    if (this.user.type === 1) {


      //get by today's date
      if (this._getterType) {

      }
      //get by specific date
      if (this._getterType) {

      }
      // get all
      else {
        this.flightServ.getAll().subscribe(
          flight => {
            this.loading = false;
            this.flights = flight;
            if (flight.length === 0) {
              this.noFlights = true;
            }
          });
      }


    }


    //if it's a normal user they can only get their flights
    if (this.user.type === 2) {
      this.flightServ.getByUserId(this.user.id).subscribe(flight => {
        this.loading = false;
        this.flights = flight;
        if (flight.length === 0) {
          this.noFlights = true;
        }
      })
      ;
    }
  }

  // getFlights() {
  //    this.loading = true;
  //
  //   //getType of 1 means to get by date
  //   if (this.getType === 1) {
  //     this.flightServ.getByDate(this.datePipe.transform(this.inputDate, 'yyyyMMdd')).subscribe(
  //       flight => {
  //         this.loading = false;
  //         this.flights = flight;
  //         if (flight.length === 0) {
  //           this.noFlights = true;
  //         }
  //       }
  //     );
  //   }
  //
  //   //get by userId
  //   if (this.getType === 2) {
  //
  //   }
  //   //get all flights
  //   if (this.getType === 3) {
  //     this.flightServ.getAll().subscribe(
  //       flight => {
  //         this.loading = false;
  //         this.flights = flight;
  //         if (flight.length === 0) {
  //           this.noFlights = true;
  //         }
  //       }
  //     );
  //   }
  //
  //   //when the list of flights are already provided
  //   else {
  //     this.flights = this.inputFlights;
  //   }
  //
  // }


}
