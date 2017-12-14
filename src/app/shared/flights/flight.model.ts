import {Leg} from '../legs/leg.model';
import {DatePipe} from '@angular/common';
import {User} from '../users/user.model';
import {Subscription} from '../subscriptions/subscription.model';


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
  legIds?: number[];
  users: User[];
  userIds?: number[];
  subs: Subscription[];
  subIds: number[];
}
