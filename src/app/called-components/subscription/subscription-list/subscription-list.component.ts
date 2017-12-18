import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {Subscription} from '../../../shared/subscriptions/subscription.model';

import {User} from '../../../shared/users/user.model';

import {SubscriptionService} from '../../../shared/subscriptions/subscription.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {
  subscriptions: Subscription[];
  loading = true;

  @Input() user: User;

  noSubscriptions = false;

  constructor(private subServ: SubscriptionService) {
  }


  ngOnInit() {
    this.getSubscriptions();
  }

  getSubscriptions() {
    this.subServ.getByUserId(this.user.id).subscribe(subscriptions => {
        this.loading = false;
        this.subscriptions = subscriptions;
        if (subscriptions.length === 0) {
        }
        this.noSubscriptions = true;
      }
    );
  }

}
