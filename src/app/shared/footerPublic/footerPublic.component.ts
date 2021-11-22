import { Component, OnInit } from '@angular/core';
import { PublicService } from '../../features/public/services/public.service';
import { organization, organResp } from '../../features/public/models/organization.interface';



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
