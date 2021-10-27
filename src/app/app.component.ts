import {  Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

public originUrl:String="/home";

  constructor(private router:Router,private route:ActivatedRoute){}        
  ngOnInit(){
    //ACA ME FALTA OBTENER LA RUTA ACTUAL
    this.originUrl="/home"
  }    
}
