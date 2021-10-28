import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/features/public/models/User';
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

  constructor(private router:Router,private userStatusService:UserStatusService) {}


  async signOut(){
    await this.userStatusService.deleteUser();
    this.router.navigate(["/home"]);
  }

  async ngOnInit(): Promise<void> {
   
  }
  async ngAfterViewInit() {
    this.template = this.headerPublic;   
    let isLogged=await this.userStatusService.isUserLoggedIn();    
    if (isLogged) {      
      this.template = this.headerBackoffice;
    }
   
  }
}
