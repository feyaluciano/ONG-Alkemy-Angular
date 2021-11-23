import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from 'src/app/shared/animations/animations';


@Component({
  selector: 'app-app-public',
  templateUrl: './app-public.component.html',
  styleUrls: ['./app-public.component.scss'],
  animations: [
    fadeInAnimation
    // animation triggers go here
  ]
})
export class AppPublicComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}
