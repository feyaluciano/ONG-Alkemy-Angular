import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.scss']
})
export class HeaderPublicComponent implements OnInit {

  loggedIn:boolean=true;
  constructor(private router:Router) { }

  ngOnInit() {
   localStorage.getItem("userToken");
  }

  logOut(){
    localStorage.removeItem("userToken");
    this.loggedIn = false;
    this.router.navigate([''])
  }

}
