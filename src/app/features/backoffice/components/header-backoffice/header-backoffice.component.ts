import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStatusService } from 'src/app/core/services/user-status.service';

@Component({
  selector: 'app-header-backoffice',
  templateUrl: './header-backoffice.component.html',
  styleUrls: ['./header-backoffice.component.scss']
})
export class HeaderBackofficeComponent implements OnInit {

  constructor(private router:Router,private userStatusService:UserStatusService) { }

  signOut(){
    this.userStatusService.deleteUser();
    this.router.navigate(["/home"]);
  }

  ngOnInit() {
  }

}
