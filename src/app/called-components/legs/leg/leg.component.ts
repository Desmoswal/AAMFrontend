import {Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.css']
})
export class LegComponent implements OnInit {

  @Input() leg;
  isDelayed = false;
  _delay: string;

  constructor(private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.setDelayString();
  }

  setDelayString() {
    const array = this.leg.delay.split(':').map(Number);

    const hours = array[0];
    const min = array[1];
    if (min > 0) {
      this.isDelayed = true;
      let hourString = '';
      let minString = '';
      if (hours === 1) {
        hourString = hours + ' hour and ';
      }
      else
        hourString = hours + ' hours and ';
      if (min === 1) {
        minString = min + ' minute';
      }
      else {
        minString = min + ' minutes';
      }
      this._delay = hourString + minString;

    }
    else {
      this._delay = 'No delays';
    }
  }

}
