import {Leg} from '../legs/leg.model';
import {DatePipe} from '@angular/common';


export class Flight {
  id: number;
  flightNo: string;
  totalSeats: number;
  seatsAvailable: number;
  regNo: string;
  notes?: string;
  flightDuration: Date;
  totalDelay: DatePipe;
  legs?: Leg[];
}
