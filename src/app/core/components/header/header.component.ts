import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/features/models/User';
import { UserStatusService } from '../../services/user-status.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  
  @ViewChild("headerBackoffice", { static: true })
  headerBackoffice!: TemplateRef<any>;
  @ViewChild("headerPublic", { static: true }) headerPublic!: TemplateRef<any>;
  @ViewChild(TemplateRef, { static: true }) template!: TemplateRef<any>;

  constructor(private router:Router,private userStatusService:UserStatusService) {
    this.template = this.headerPublic;   
    let isLogged= this.userStatusService.isUserLoggedIn();    
    if (isLogged) {      
      this.template = this.headerBackoffice;
    }

  }


  signOut(){
    this.userStatusService.deleteUser();
    this.router.navigate(["/home"]);
  }

   ngOnInit() {
   
  }
   ngAfterViewInit() {
    // this.template = this.headerPublic;   
    // let isLogged= this.userStatusService.isUserLoggedIn();    
    // if (isLogged) {      
    //   this.template = this.headerBackoffice;
    // }
   
  }
}
