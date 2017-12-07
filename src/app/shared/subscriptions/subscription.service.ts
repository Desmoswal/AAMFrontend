import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Leg} from '../legs/leg.model';
import {HttpClient} from '@angular/common/http';
import {Subscription} from './subscription.model';

const url = environment.apiEndpoint + 'subscriptions';

@Injectable()
export class SubscriptionService {
  constructor(private http: HttpClient) { }

  getByUserId(id: number): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(url + '/' + id);
  }
}
