import {Flight} from '../flights/flight.model';
import {User} from '../users/user.model';

export class Subscription {
  userId: number;
  date: Date;
  user: User;
  flights: Flight[];
}
