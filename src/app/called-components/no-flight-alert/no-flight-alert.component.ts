import {Component, Input, OnInit} from '@angular/core';
import {SubscriptionService} from '../../shared/subscriptions/subscription.service';
import {User} from '../../shared/users/user.model';
import {DatePipe} from '@angular/common';
import {Subscription} from '../../shared/subscriptions/subscription.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-no-flight-alert',
  templateUrl: './no-flight-alert.component.html',
  styleUrls: ['./no-flight-alert.component.css']
})
export class NoFlightAlertComponent implements OnInit {
  subscribed: boolean = false;
  _recievedDate: string;
  @Input() _user: User;
  checkedSubs: boolean = false;
  existingSub: boolean;

  @Input() set receivedDate(date: string) {
    this._recievedDate = date.slice(0, 4) + '-' + date.slice(4, 6) + '-' + date.slice(6);
    this.subscribed = false;
    this.checkedSubs = false;
    this.existingSub = false;
    this.getSubscriptions();
  }

  constructor(private subServ: SubscriptionService) {

  }

  ngOnInit() {
    this.getSubscriptions();
  }

  createSub() {
    this.subServ.createSubscription(this._user.id, this._recievedDate).subscribe(event => {
      this.subscribed = true;
    });
  }

  getSubscriptions() {
    this.subServ.getByUserId(this._user.id).subscribe(subscriptions => {
        if (subscriptions.length !== 0) {
          const subArray: Date[] = new Array<Date>();
          for (let i = 0; i < subscriptions.length; i++) {
            const date = new Date(subscriptions[i].date);
            subArray.push(date);
          }
          const x = 'T00:00:00';
          const time = this._recievedDate.concat(x);
          const recDate = new Date(time);

          for (let i = 0; i < subArray.length; i++) {
            if (recDate.valueOf() - subArray[i].valueOf()) {
              this.existingSub = true;
            }
          }
        }
        this.checkedSubs = true;
      }
    );

  }
}
