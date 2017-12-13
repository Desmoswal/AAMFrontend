import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve-flight',
  templateUrl: './reserve-flight.component.html',
  styleUrls: ['./reserve-flight.component.css']
})
export class ReserveFlightComponent implements OnInit {
  selectedDate: string;
  constructor() { }

  ngOnInit() {
  }
  receiveDate($event) {
    this.selectedDate = $event;
  }

}
