import {Flight} from '../flights/flight.model';
import {User} from '../users/user.model';

export class Subscription {
  id: number;
  userId: number;
  date: string;
  user: User;
  flights: Flight[];
}
