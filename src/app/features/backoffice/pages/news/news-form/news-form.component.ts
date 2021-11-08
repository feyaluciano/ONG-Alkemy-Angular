import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/features/models/news.interface';
import { NewsService } from 'src/app/features/services/news/news.service';


@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  titlePage!: string;

  news!: News;
  form: boolean = false;


  constructor( private activatedRoute: ActivatedRoute, private newsServices: NewsService ) { }

  ngOnInit(): void {

    if(this.activatedRoute.snapshot.params['id']){

      this.titlePage = 'Formulario Edición de Novedades';

      this.activatedRoute.params.subscribe( ({id}) => {

        
        this.newsServices.getNewsById(id).subscribe( r => {
          
        
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
