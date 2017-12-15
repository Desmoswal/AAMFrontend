import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../../shared/flights/flight.model';
import {Subscription} from '../../../shared/subscriptions/subscription.model';
import {SubscriptionService} from '../../../shared/subscriptions/subscription.service';

@Component({
  selector: 'app-subscription-list',
  templateUrl: './subscription-list.component.html',
  styleUrls: ['./subscription-list.component.css']
})
export class SubscriptionListComponent implements OnInit {
  subscriptions: Subscription[];
  loading = true;
  noSupscriptions = false;

  constructor(private subServ: SubscriptionService) {
  }

  @Input()
  userId: number;

  ngOnInit() {
  }

  getSubscriptions() {
    this.subServ.getByUserId(this.userId).subscribe(subscriptions => {
        this.loading = false;
        this.subscriptions = subscriptions;
        if (subscriptions.length === 0) {
        }
        this.noSupscriptions = true;
      }
    );
  }

}
