import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve-flight',
  templateUrl: './reserve-flight.component.html',
  styleUrls: ['./reserve-flight.component.css']
})
export class ReserveFlightComponent implements OnInit {
  message: string;
  constructor() { }

  ngOnInit() {
  }
  receiveMessage($event) {
    this.message = $event;
  }

}
