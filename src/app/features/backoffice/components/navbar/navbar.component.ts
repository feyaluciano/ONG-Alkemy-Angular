import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  sideBarToggle(){
    document.getElementById('sidebarMenu')!.classList.remove('d-md-block')

   //document.getElementById('sidebarMenu')!.style.display = 'none';
  }

  ngOnInit(): void {
  }

}
