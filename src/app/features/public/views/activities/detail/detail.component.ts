import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  titulo!:string;
  description!:string;
  image!:string;
  id:number = 2;
  constructor(private http:HttpService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']
    this.http.get(`${environment.apiUrl}/activities/${this.id}`).subscribe((resp:any)=>{
      this.titulo = resp.data.name;
      this.description = resp.data.description;
      this.image = resp.data.image;
      console.log(this.titulo)
    })
  }



}
