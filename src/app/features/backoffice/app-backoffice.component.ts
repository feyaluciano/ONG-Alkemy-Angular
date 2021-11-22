import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from 'src/app/shared/animations/animations';

@Component({
  selector: 'app-app-backoffice',
  templateUrl: './app-backoffice.component.html',
  styleUrls: ['./app-backoffice.component.scss'],
  animations: [
    fadeInAnimation
    // animation triggers go here
  ]
})
export class AppBackofficeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
