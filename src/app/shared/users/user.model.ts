import {Flight} from '../flights/flight.model';

export class User {
  id: number;
  type: number;
  flights: Flight[];
}
