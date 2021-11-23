import { Component, OnInit } from '@angular/core';

import {  organization, organResp } from 'src/app/features/public/models/organization.interface';
import { PublicService } from 'src/app/features/public/services/public.service';

@Component({
  selector: 'app-footerPublic',
  templateUrl: './footerPublic.component.html',
  styleUrls: ['./footerPublic.component.scss']
})
export class FooterPublicComponent implements OnInit {
  organization!:organResp;
  loader:boolean = true;

  constructor(private publicServices:PublicService) { }


  ngOnInit(){
   return this.publicServices.getEntities<organization<organResp>>('http://ongapi.alkemy.org/api/organization').subscribe((resp)=>{
      this.organization  = resp.data;
    })
  }


}
