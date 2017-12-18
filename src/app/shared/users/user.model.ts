import {Flight} from '../flights/flight.model';
import {Subscription} from '../subscriptions/subscription.model';

export class User {
  id: number = 0;
  type: number = 0;
  username: string = '';
  flights?: Flight[];
  subscriptions?: Subscription[];
  password?: string;
}
