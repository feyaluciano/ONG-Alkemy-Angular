import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  name:string='';
  logo!:string;
  shortDescription!:string;
  constructor(private http:HttpService) { }

  ngOnInit() {
    this.http.get(`${environment.apiUrl}/organization`).subscribe((resp:any)=>{
      this.name = resp.data.name;
      this.logo = resp.data.logo;
      this.shortDescription = resp.data.short_description
    })
  }

}
