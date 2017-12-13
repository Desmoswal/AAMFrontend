import {Component, Input, OnInit} from '@angular/core';
import {DateStringService} from '../../shared/date-string-service';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-cal-alert',
  templateUrl: './cal-alert.component.html',
  styleUrls: ['./cal-alert.component.css']
})
export class CalAlertComponent implements OnInit {

  protected _dateString: string;

  constructor(private dateServ: DateStringService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

  }

  @Input() set recievedDate(date: Date) {
    if (date != null) {
      this._dateString = this.dateServ.dateToString(date);
    }
    else {
      this.route.queryParams.subscribe(params => {
        this._dateString = params.date;
      });
    }
  }
}
