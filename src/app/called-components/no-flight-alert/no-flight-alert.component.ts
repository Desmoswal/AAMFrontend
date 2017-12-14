import {Component, Input, OnInit} from '@angular/core';
import {SubscriptionService} from '../../shared/subscriptions/subscription.service';

@Component({
  selector: 'app-no-flight-alert',
  templateUrl: './no-flight-alert.component.html',
  styleUrls: ['./no-flight-alert.component.css']
})
export class NoFlightAlertComponent implements OnInit {

  constructor(private subServ: SubscriptionService) {
  }

  @Input() receivedDate: string;
  @Input() userId = 1;

  ngOnInit() {
  }

  createSub() {
    //this.subServ.createSubscription(this.user, this.recievedDate);
    console.log(this.userId, this.receivedDate);
  }

}
