import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mobile-friendly';
  constructor(private router: Router) {}
  ngOnInit() {
    if (window.matchMedia("only screen and (max-width: 760px)").matches) {
      console.log('Is mobile!');
      this.router.navigate(['mobile']);
    } else {
      this.router.navigate(['desktop']);
    }
  }
}
