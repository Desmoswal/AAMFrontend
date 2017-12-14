import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})

export class FlightComponent implements OnInit {
  @Input() flight: Flight;
  constructor() {

  }
ngOnInit() {
  }
}



