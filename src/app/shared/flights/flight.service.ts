import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Flight} from './flight.model';
const url = environment.apiEndpoint + '/flight';

@Injectable()
export class FlightService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(url);
  }

  getByUserId(id: number): Observable<Flight[]> {
    return this.http.get<Flight[]>(url + '/' + id);
  }

  getByDate(date: string): Observable<Flight[]> {
    return this.http.get<Flight[]>(url + '/bydate/' + date);
  }

  getByFlightId(id: number): Observable<Flight> {
    return this.http.get<Flight>(url + '/' + id);
  }
}
