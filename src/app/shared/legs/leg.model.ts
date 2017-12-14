import {Flight} from '../flights/flight.model';

export class Leg {

  id: number;
  legNo: number;
  deptLocation: string;
  arrLocation: string;
  std: string;
  sta: string;
  toff: string;
  tdown: string;
  flight: Flight;
  delay: string;

}
