import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aviation-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  today: Date;
  userType: number;

  constructor() {
    this.checkUserType();
    this.today = new Date();
  }

  ngOnInit() {
  }

  checkUserType() {
    //returns 1 if it's a planner
    this.userType = 1;
    //returns 2 if it's a normal user
  }

}
