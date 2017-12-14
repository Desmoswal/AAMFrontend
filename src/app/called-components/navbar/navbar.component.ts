import {Component, Input, OnInit} from '@angular/core';
import {DateStringService} from '../../shared/date-string-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  date: string;

  constructor(private dateStringServ: DateStringService) {
  }

  ngOnInit() {
    this.date = this.dateStringServ.dateToString(new Date());
  }

}
