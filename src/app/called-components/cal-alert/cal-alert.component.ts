import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cal-alert',
  templateUrl: './cal-alert.component.html',
  styleUrls: ['./cal-alert.component.css']
})
export class CalAlertComponent implements OnInit {

  @Input() recievedDate: string;

  constructor() { }

  ngOnInit() {
    console.log(this.recievedDate);
  }

}
