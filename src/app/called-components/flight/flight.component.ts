import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../shared/flights/flight.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit {
  // @Input
  flight: Flight;
  constructor() {
    this.flight = {
      id: 0,
      flightNo: '601',
      totalSeats: 16,
      seatsAvailable: 5,
      regNo: '123',
      notes: 'This is a flight',
      flightDuration: new Date('February 4, 2016 10:13:00'),
      totalDelay: new DatePipe('en-US'),
      legs: []
    };
  }
ngOnInit() {
  }
}



