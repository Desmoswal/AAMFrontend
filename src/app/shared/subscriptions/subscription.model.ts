import {Flight} from '../flights/flight.model';
import {User} from '../users/user.model';

export class Subscription {
  id: number = 0;
  userId: number = 0;
  date: string = '';
  user: User;
  flights: Flight[];
}
