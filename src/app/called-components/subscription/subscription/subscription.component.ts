import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Subscription} from '../../../shared/subscriptions/subscription.model';
import {DatePipe} from '@angular/common';
import {SubscriptionService} from '../../../shared/subscriptions/subscription.service';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  @Input() subscription: Subscription;
  @Output() DeleteEvent = new EventEmitter();
  _departureDate: string;
  _departureTime: Date;
  _stringForFlights;

  constructor(private subServ: SubscriptionService, private router: Router) {
  }

  ngOnInit() {
    this.getDate();
    this.getAmountOfFlights();
  }

  getDate() {
    this._departureTime = new Date(this.subscription.date);
    const dp = new DatePipe('da-DK');
    this._departureDate = dp.transform(this._departureTime, 'yyyyMMdd');
    this._departureDate = this._departureTime.getFullYear().toString() +
      (this._departureTime.getMonth() + 1 ).toString() + this._departureTime.getDate().toString();
  }

  deleteSubscription() {
    this.subServ.deleteSubscription(this.subscription.id).subscribe(sub => {
      this.DeleteEvent.emit(this.subscription);
    });
    }
  getAmountOfFlights() {
    if (this.subscription.flights.length === 0) {
      this._stringForFlights = 'No Flights';
    }
    else {
        this._stringForFlights = 'There is ' + this.subscription.flights.length + ' flight(s) available';
    }
  }

}
