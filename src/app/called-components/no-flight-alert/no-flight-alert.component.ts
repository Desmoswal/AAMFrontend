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

  _recievedDate: string;
  @Input() user: User;

  @Input() set receivedDate(date: string) {
    this._recievedDate = date.slice(0, 4) + '-' + date.slice(4, 6) + '-' + date.slice(6);
  }

  constructor(private subServ: SubscriptionService, private router: Router) {

  }

  ngOnInit() {
  }

  createSub() {
    this.subServ.createSubscription(this.user.id, this._recievedDate).subscribe(event =>{
      this.router.navigateByUrl('/home');
    });
  }

}
