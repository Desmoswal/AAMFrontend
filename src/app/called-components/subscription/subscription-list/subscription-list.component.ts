import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {Subscription} from '../../../shared/subscriptions/subscription.model';
import {User} from '../../../shared/users/user.model';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {
  flights: Subscription[];
  loading = true;

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
