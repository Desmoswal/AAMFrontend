import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {DatePipe} from '@angular/common';
import {Leg} from '../../../shared/legs/leg.model';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit {

  @Input() flight: Flight;
  legs: Leg[];

  departureTime: Date;

  constructor() {

  }

  ngOnInit() {
    this.checkLegs();
  }

  checkLegs() {
    if (this.flight.legs !== null) {
      this.legs = this.flight.legs;
      this.departureTime = new Date(this.legs[0].toff);
    }
  }
}



