import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-noaccess',
  templateUrl: './noaccess.component.html',
  styleUrls: ['./noaccess.component.css']
})
export class NoaccessComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
    setTimeout((router: Router) => {
      this.router.navigate(['/home']);
    }, 3000);
  }

}
