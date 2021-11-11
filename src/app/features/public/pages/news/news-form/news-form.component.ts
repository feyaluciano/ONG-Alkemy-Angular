import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { News } from '../../../../models/news.interface';
import { NewsService } from '../../../../services/news/news.service';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  news!: News[];
  newsCompleted: boolean = false;

  constructor(
    private newsSvc: NewsService
  ) {
    this.newsSvc.getNews()
      .subscribe((resp: any) => {
        this.news = resp.data;
      },
      (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Algo salió mal',
          showConfirmButton: true
        });
      },
      () => {
        setTimeout(() => {
          this.newsCompleted = true;
        }, 500);
      });
  }

  ngOnInit(): void {
  }

}
