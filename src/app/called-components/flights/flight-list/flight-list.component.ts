import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {FlightService} from '../../../shared/flights/flight.service';
import {DatePipe} from '@angular/common';
import {User} from '../../../shared/users/user.model';
import {UserService} from '../../../shared/users/user.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  _flights: Flight[];
  _specificDate: string;
  _getType: string;
  _bookingButton: boolean;

  @Input() set specificDate(date: string) {
    this._specificDate = date;
  }

  @Input() _user: User;

   @Input() set getType(getType: string) {
     this._getType = getType;
   }

  @Input() set flights(flights: Flight[]) {
    this._flights = flights;
  }

  @Input() set bookingButton(button: boolean) {
    this._bookingButton = button;
  }

  noFlights = false;
  loading = false;

  constructor(private flightServ: FlightService, private datePipe: DatePipe, private userServ: UserService) {

  }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.loading = true;
    //if it's a planner they can get all the flights or flight by date
    if (this._user.type === 1) {
      //this means the list of flights will already be inputted
      if (typeof this._flights === 'undefined') {
        //no specific date has been given when component is initialised, so get all flights
        if (typeof this._specificDate === 'undefined') {
          if (typeof this._getType === 'undefined') {
            //get by today's date
            this.flightServ.getByDate(this.datePipe.transform(new Date(), 'yyyyMMdd')).subscribe(
              flights => {
                this.loading = false;
                this._flights = flights;
                if (flights.length === 0) {
                  this.noFlights = true;
                }
              }
            );
          }
          else {
            this.flightServ.getAll().subscribe(
              flights => {
                this.loading = false;
                this._flights = flights;
                if (flights.length === 0) {
                  this.noFlights = true;
                }
              }
            );
          }
        }
        //get by specific date
        else {
          this.flightServ.getByDate(this._specificDate).subscribe(
            flights => {
              this.loading = false;
              this._flights = flights;
              if (flights.length === 0) {
                this.noFlights = true;
              }
            }
          );
        }
      }
      else {
        this.loading = false;
      }
    }
    //normal users can only get their flights
    if (this._user.type === 2) {
      this.userServ.getById(this._user.id).subscribe(user => {
        this.loading = false;
        this._flights = user.flights;
        if (user.flights.length === 0) {
          this.noFlights = true;
        }
      })
      ;
    }
  }
}
