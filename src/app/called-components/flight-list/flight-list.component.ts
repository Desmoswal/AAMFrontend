import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../shared/flights/flight.model';
import {FlightService} from '../../shared/flights/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  flights: Flight[];

  // @Input() date: Date;

  constructor(private flightServ: FlightService) {
    flightServ.getByDate('20171101').subscribe(
      flight => {
        this.flights = flight;
      }
    );
    for (let i = 0; i < this.flights.length; i++) {
      console.log(this.flights[i].flightNo);
    }
  }

  ngOnInit() {
  }

}
