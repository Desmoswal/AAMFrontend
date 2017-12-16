import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailService} from '../../shared/email/email.service';
import {Email} from '../../shared/email/email.model';
import 'rxjs/add/operator/switchMap';
import {UserService} from '../../shared/users/user.service';
import {FlightService} from '../../shared/flights/flight.service';
import {User} from '../../shared/users/user.model';
import {Flight} from '../../shared/flights/flight.model';

@Component({
  selector: 'app-reserve-form-detail',
  templateUrl: './reserve-form-detail.component.html',
  styleUrls: ['./reserve-form-detail.component.css']
})
export class ReserveFormDetailComponent implements OnInit {
  model: any = new Array();
  _bookingDate: string;
  _bookingRequesterID: number;
  _bookingFlightID: number;
  _user: User;
  _flight: Flight;

  constructor(private router: Router,
              private service: EmailService,
              private route: ActivatedRoute,
              private userSer: UserService,
              private flightSer: FlightService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //formated the date as yyyy-MM-dd
      this._bookingDate = params.d.splice(0, 4) + '-' + params.d.slice(4, 6) + '-' + params.d.slice(6);
      this._bookingFlightID = params.f;
      this._bookingRequesterID = params.i;
    });
    this.flightSer.getByFlightId(this._bookingFlightID).subscribe(flight => this._flight = flight);
    this.userSer.getById(this._bookingRequesterID).subscribe(user => this._user = user);
  }


  send() {
    const content = new Map();
    const assignedtitles = new Map();
    const titles = [
      'Asset',
      'Department',
      'Job Category',
      'Plant',
      'Work destination',
      'Tollgate fulfilled',
      'Material Status',
      'Focal ID',
      'Work order',
      'System number',
      'Service boat required',
      'Earliest start',
      'Latest finish',
      'Work duration',
      'Work shift',
      'WBS Element',
      'Offshore contact',
      'Prod. Assist.'
    ];
    const keys = [
      'asset',
      'department',
      'jobcat',
      'plant',
      'wdest',
      'tollgate',
      'materialstatus',
      'focalid',
      'workorder',
      'systemnumber',
      'serviceboat',
      'earlieststart',
      'latestfinish',
      'workduration',
      'workshift',
      'wbselement',
      'offscontact',
      'prodassist'
    ];
    for (let i = 0; i < keys.length; i++) {
      assignedtitles.set(keys[i], titles[i]);
    }

    for (let i = 0; i < keys.length; i++) {
      content.set(keys[i], this.model[keys[i]]);
    }
    let mail = '';

    mail += '<p>Automated test email for a booker. This email contains the flight reserve form\'s data.</p>';
    mail += '<table>';
    for (let i = 0; i < keys.length; i++) {
      mail += '<tr><td>';
      mail += assignedtitles.get(keys[i]) + ':';
      mail += '</td><td>';
      if (content.get(keys[i]) === true) {
        mail += 'Yes';
      } else if (content.get(keys[i]) === false) {
        mail += 'No';
      } else {
        mail += content.get(keys[i]);
      }
      mail += '</td></tr>';
    }
    mail += '</table>';
    mail += '<p>This is the end of this automatically generated shi- i mean email.</p>';

    const email = new Email();
    email.body = mail;
    email.subject = 'testmail';
    email.toEmailAddress = 'kris88a1@easv365.dk';
    email.toName = 'Kristoftest';
    const result = this.service.sendemail(email);
    result.subscribe();
  }
}

