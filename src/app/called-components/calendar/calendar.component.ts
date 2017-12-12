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

  viewDate: Date = new Date();

  @Output() messageEvent = new EventEmitter<string>();
  constructor() {}

  dayClicked({date, events}:{date: Date; events: CalendarEvent []}) {
    this.messageEvent.emit(date.toDateString());
  }
}
