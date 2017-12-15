import {Flight} from '../flights/flight.model';
import {Subscription} from '../subscriptions/subscription.model';

export class User {
  id: number = 0;
  type: number = 0;
  flights?: Flight[];
  subscriptions?: Subscription[];
}
