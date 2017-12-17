import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  date: string;

  constructor( private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(), 'yyyyMMdd');
  }

}
