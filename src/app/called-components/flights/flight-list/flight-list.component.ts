import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {FlightService} from '../../../shared/flights/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: Flight[];



  loading = false;

  // @Input() date: Date;

  constructor(private flightServ: FlightService) {
    this.getFlights();
  }

  ngOnInit() {
  }

  getFlights() {
    this.loading = true;
    this.flightServ.getByDate('20171101').subscribe(
      flight => {
        this.loading = false;this.flights = flight;

      }
    );
  }

}
