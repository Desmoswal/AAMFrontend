import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/users/user.model';

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.component.html',
  styleUrls: ['./flight-information.component.css']
})
export class FlightInformationComponent implements OnInit {

  user: User;
  constructor() { }

  ngOnInit() {
    this.getUser();
  }
  //TODO
  //need to change this method when we have authenication, so we get the user from the backend
  getUser() {
    this.user = new User();
    this.user.id = 1;
    this.user.type = 1;
  }

}
