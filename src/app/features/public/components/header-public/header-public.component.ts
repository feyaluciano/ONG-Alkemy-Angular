import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-public',
  templateUrl: './header-public.component.html',
  styleUrls: ['./header-public.component.scss']
})
export class HeaderPublicComponent implements OnInit {

  loggedIn:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
   if(localStorage.getItem("userToken")){
     this.loggedIn = true;
   }
  }

  logOut(){
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    this.loggedIn =false;
    this.router.navigate([''])
  }

}
