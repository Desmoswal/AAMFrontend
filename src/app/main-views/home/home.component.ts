import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/users/user.model';

@Component({
  selector: 'app-aviation-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor() {

  }

  ngOnInit() {
    this.getUser();
  }

  //TODO
  //will need to change this when we have authenticaiton
  getUser() {
    this.user = new User();
    this.user.id = 1;
    this.user.type = 1;
  }


}
