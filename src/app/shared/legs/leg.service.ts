import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Flight} from '../flights/flight.model';
import {Observable} from 'rxjs/Observable';
import {Leg} from './leg.model';
import {environment} from '../../../environments/environment';

const url = environment.apiEndpoint + 'legs';
@Injectable()
export class LegService {

  constructor(private http: HttpClient) { }

  getByFlightId(id: number): Observable<Leg[]> {
    return this.http.get<Leg[]>(url + '/' + id);
  }

}
