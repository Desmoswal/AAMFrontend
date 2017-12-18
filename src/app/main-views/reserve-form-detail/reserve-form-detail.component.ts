import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmailService} from '../../shared/email/email.service';
import {Email} from '../../shared/email/email.model';
import 'rxjs/add/operator/switchMap';
import {UserService} from '../../shared/users/user.service';
import {FlightService} from '../../shared/flights/flight.service';
import {User} from '../../shared/users/user.model';
import {Flight} from '../../shared/flights/flight.model';
import {TokenService} from '../../shared/login/shared/token.service';

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
              private flightSer: FlightService,
              private  tokServ: TokenService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      //formated the date as yyyy-MM-dd
      this._bookingDate = params.d.slice(0, 4) + '-' + params.d.slice(4, 6) + '-' + params.d.slice(6);
      this._bookingFlightID = params.f;
    });
    this.flightSer.getByFlightId(this._bookingFlightID).subscribe(flight => this._flight = flight);
    this.checkUser();
  }

  checkUser() {
    if (typeof this._user === 'undefined') {
      if (localStorage.getItem('token')) {
        this.tokServ.getUserFromToken().subscribe(outputUser => {
          this._user = outputUser;
        });
      }
      else {
        this.router.navigateByUrl('/login');
      }
    }
  }

  validate(formcontent: Map<any, any>, keys: Array<any>): boolean {
    let allValid:boolean = false;
    for(let i = 0; i < keys.length; i++) {
      let fieldvalue = formcontent.get(keys[i]);
      if(!(keys[i] == 'earlieststart' || keys[i] == 'latestfinish')) {
        if(fieldvalue !== 'undefined') {
          allValid = true;
        } else {
          allValid = false;
        }
      }
      if(keys[i] == 'earlieststart' || keys[i] == 'latestfinish') {
        let testdate = new Date(Date.parse(formcontent.get(keys[i])));
        if(!isNaN(testdate.getDate())) {
          allValid = true;
        } else {
          allValid = false;
        }
      }
    }
    return allValid;
  }

  send() {

  let content = new Map();
  let assignedtitles = new Map();
  let titles = [
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
  let keys = [
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
  ];//idk how to get them from the form...
    for(let i=0;i<keys.length;i++) {
      assignedtitles.set(keys[i],titles[i]);
    }

    for (let i = 0; i < keys.length; i++) {
      content.set(keys[i], this.model[keys[i]]);
    }
    if(this.validate(content, keys)) {
      let mail = "";

      mail += "<p>Automated test email for a booker. This email contains the flight reserve form's data.</p>";
      mail += "<table>";
      mail += "<tr><td>Flight: </td><td>"+this._flight.flightNo +"</td></tr>";
      mail += "<tr><td>Requester: </td><td>"+this._user.username+"</td></tr>";
      mail += "<tr><td>Flight Date: </td><td>"+this._bookingDate+"</td></tr>";

      for (let i = 0; i < keys.length; i++) {
        mail += "<tr><td>";
        mail += assignedtitles.get(keys[i]) + ':';
        mail += "</td><td>";
        if (content.get(keys[i]) === true) {
          mail += "Yes";
        } else if (content.get(keys[i]) === false) {
          mail += "No";
        } else {
          mail += content.get(keys[i]);
        }
        mail += "</td></tr>";
      }
      mail += "</table>";
      mail += "<p>This is the end of this automatically generated email.</p>";

      let email = new Email();
      email.body = mail;
      email.subject = "testmail";
      email.toEmailAddress = "meng.dunmow@maerskoil.com";
      email.toName = "Meng Dunmow";
      let result = this.service.sendemail(email);
      result.subscribe();
    } else {
      alert("form is not complete or has invalid data");

    }
  }
}

