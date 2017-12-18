import {Flight} from '../flights/flight.model';
import {Subscription} from '../subscriptions/subscription.model';

export class User {
  id: number;
  type: number;
  username: string;
  flights?: Flight[];
  subscriptions?: Subscription[];
  password?: string;
}
