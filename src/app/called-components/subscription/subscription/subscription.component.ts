import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from '../../../shared/subscriptions/subscription.model';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  @Input() subscription: Subscription;
  constructor() { }

  ngOnInit() {
  }

}
