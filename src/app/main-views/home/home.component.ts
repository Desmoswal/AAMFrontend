import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/users/user.model';

@Component({
  selector: 'app-aviation-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = new User();

  constructor() {
    this.user.id = 1;
    this.user.type = 1;
  }

  ngOnInit() {
  }


}
