import {
  Component, EventEmitter,
  OnInit, Output
} from '@angular/core';
import {
  CalendarEvent,
} from 'angular-calendar';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {

  view: string = 'month';
  viewDate: Date = new Date();

  @Output() dateEvent = new EventEmitter<string>();
  constructor() {}

  dayClicked({date, events}: {date: Date; events: CalendarEvent []}) {
    const day = (date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()).toString();
    this.dateEvent.emit(day);
  }
}
