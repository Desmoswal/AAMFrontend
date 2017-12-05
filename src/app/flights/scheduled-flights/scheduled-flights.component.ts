import { Component, OnInit } from '@angular/core';
import {Flight} from '../../flight/flight';

@Component({
  selector: 'app-scheduled-flights',
  templateUrl: './scheduled-flights.component.html',
  styleUrls: ['./scheduled-flights.component.css']
})
export class ScheduledFlightsComponent implements OnInit {
  flightScheduled: Flight;
  constructor() {
    this.flightScheduled = {
      id: 1,
      flightNo: '614',
      totalSeats: 16,
      seatsAvailable: 4,
      regNo: 'DCU',
      notes: 'Delayed with 55 minutes'
    };
  }

  ngOnInit() {
  }

}
