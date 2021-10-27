import {  Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Datum } from 'src/app/core/interfaces/httpResponse.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  public originUrl:String="/home";

  data: Datum[] = [
    {
      id: 555,
      name: "Primer Slide",
      description: "Descripción de relleno.",
      image: "assets/slides1.jpg",
      order: 5367446,
      user_id: null,
      created_at: "2021-09-12T16:45:10.000000Z",
      updated_at: "2021-09-12T16:45:10.000000Z",
      deleted_at: null,
      group_id: null
  },
  {
    id: 999,
    name: "Segundo Slide",
    description: "Texto de relleno.",
    image: null,
    order: 5367446,
    user_id: null,
    created_at: "2021-09-12T16:45:10.000000Z",
    updated_at: "2021-09-12T16:45:10.000000Z",
    deleted_at: null,
    group_id: null
},
{
  id: 888,
  name: "Tercer Slide",
  description: "Texto de relleno",
  image: "assets/slides3.jpg",
  order: 5367446,
  user_id: null,
  created_at: "2021-09-12T16:45:10.000000Z",
  updated_at: "2021-09-12T16:45:10.000000Z",
  deleted_at: null,
  group_id: null
}
  ];

  constructor(private router:Router,private route:ActivatedRoute){}        
  ngOnInit(){
    this.originUrl="/home"
  }    
}
