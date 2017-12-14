import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {EmailService} from "../../shared/email/email.service";
import {Email} from "../../shared/email/email.model";
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-reserve-form-detail',
  templateUrl: './reserve-form-detail.component.html',
  styleUrls: ['./reserve-form-detail.component.css']
})
export class ReserveFormDetailComponent implements OnInit {

  @Input() reserveDate;
  @Input() reserveFlight;

  model: any = new Array();
  date: string;

  constructor(private router:Router, private service:EmailService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(), 'yyyyMMdd');
  }

  send() {
  var content = new Map();
    var assignedtitles = new Map();
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
  var keys = [
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

    for(let i=0;i<keys.length;i++) {
      content.set(keys[i], this.model[keys[i]]);
    }
      console.log(content);
      console.log(keys);
      console.log(assignedtitles);

      let mail = "";

      mail += "<p>Automated test email for a booker. This email contains the flight reserve form's data.</p>";
      mail += "<table>";
      for(let i =0;i<keys.length;i++) {
        mail += "<tr><td>";
        mail+= assignedtitles.get(keys[i]) + ':';
        mail+= "</td><td>";
          if(content.get(keys[i]) === true) {
            mail += "Yes";
          } else if(content.get(keys[i]) === false){
            mail += "No";
          } else {
            mail += content.get(keys[i]);
          }
        mail += "</td></tr>";
      }
      mail+= "</table>";
      mail += "<p>This is the end of this automatically generated shi- i mean email.</p>";

      let email = new Email();
      email.body = mail;
      email.subject = "testmail";
      email.toEmailAddress = "kris88a1@easv365.dk";
      email.toName = "Kristoftest";
      let result = this.service.sendemail(email);
      result.subscribe();
    }
  }

