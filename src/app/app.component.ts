import {  Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStatusService } from './core/services/user-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  public originUrl:String="/home";
  public showSlider:boolean = false;

 

  constructor(private router:Router,private route:ActivatedRoute,private userStatusService:UserStatusService){
    
  }        
  ngOnInit(){
    this.showSlider= !this.userStatusService.isUserLoggedIn();
    //ACA ME FALTA OBTENER LA RUTA ACTUAL
    this.originUrl="/home"

  }    
}
