import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Leg} from '../legs/leg.model';
import {HttpClient} from '@angular/common/http';
import {Subscription} from './subscription.model';
import {Router} from '@angular/router';

const url = environment.apiEndpoint + '/subscribtion';

@Injectable()
export class SubscriptionService {
  constructor(private http: HttpClient, private router: Router) { }

  getByUserId(id: number): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(url + '/byuserid/' + id);
  }

  createSubscription(userId: number, date: string): Observable<Subscription> {
    return this.http.post<Subscription>( userId.toString(), date);
  }
  deleteSubscription(subId: number): Observable<Subscription>  {
    return this.http.delete<Subscription>(url + '/' + subId);

  }
}
