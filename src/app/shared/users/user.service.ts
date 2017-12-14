import { Injectable } from '@angular/core';
import {Flight} from '../flights/flight.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {User} from './user.model';

const url = environment.apiEndpoint + 'users';
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getById(id: number): Observable<User> {
    return this.http.get<User>(url + '/' + id);
  }
}
