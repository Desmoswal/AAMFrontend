import {
  Component, EventEmitter,
  OnInit, Output
} from '@angular/core';
import {
  CalendarEvent,
} from 'angular-calendar';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {DateStringService} from '../../shared/date-string-service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  view: string = 'month';
  viewDate: Date = new Date();
  @Output() dateEvent = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit() {
  }


  dayClicked({date, events}: { date: Date; events: CalendarEvent [] }) {
    this.dateEvent.emit(date);
  }
}
