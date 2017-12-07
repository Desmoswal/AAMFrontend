import {Flight} from '../flights/flight.model';
import {DatePipe} from '@angular/common';

export class Leg {
  id: number;
  legNo: number;
  deptLocation: string;
  arrLocation: string;
  STD: Date;
  STA: Date;
  Toff: Date;
  Tdown: Date;
  flight: Flight;
  Delay: DatePipe;
}
