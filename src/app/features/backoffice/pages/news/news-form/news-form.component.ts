import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HTTPResponse } from 'src/app/features/models/HTTPResponse';
import { News } from 'src/app/features/models/news.interface';
import { PrivateBackofficeService } from '../../../services/private-backoffice.service';


@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  titlePage!: string;

  news!: News;
  form: boolean = false;


  constructor( private activatedRoute: ActivatedRoute, private privateService: PrivateBackofficeService ) { }

  ngOnInit(): void {

    if(this.activatedRoute.snapshot.params['id']){

      this.titlePage = 'Formulario Edición de Novedades';

      this.activatedRoute.params.subscribe( ({id}) => {

        // cambiar por novedadesServices
        this.privateService.getEntityById<HTTPResponse<News>>('http://ongapi.alkemy.org/api/news/', id).subscribe( r => {
          
        
          this.news = r.data;          
          this.form = true;

        });

      });
      
    } else {
      this.titlePage = 'Formulario Creación de Novedades';
      this.form = true;
    }

  }

}
