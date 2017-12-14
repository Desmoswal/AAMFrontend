import {Component, Input, OnInit} from '@angular/core';
import {Leg} from '../../../shared/legs/leg.model';

@Component({
  selector: 'app-leg-list',
  templateUrl: './leg-list.component.html',
  styleUrls: ['./leg-list.component.css']
})
export class LegListComponent implements OnInit {
  @Input() legs: Leg[];
  constructor() { }

  ngOnInit() {
  }

}
