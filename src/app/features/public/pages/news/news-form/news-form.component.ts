import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StandarDialogComponent } from '../../../../../shared/components/standar-dialog/standar-dialog.component';
import { News } from '../../../../models/news.interface';
import { NewsService } from '../../../../services/news/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news-form.component.scss']
})
export class NewsFormComponent implements OnInit {

  news!: News[];
  newsCompleted: boolean = false;

  constructor(
    private newsSvc: NewsService,
    public dialog: MatDialog,
    private router: Router
  )
    
    
    {  this.newsSvc.getNews()
      .subscribe((resp: any) => {
        setTimeout(() => {
          if (this.router.url === '/home') {
            const news = resp.data;
            this.news = news.slice(0, 4);
          } else {
            this.news = resp.data;
          }
        }, 500);
      },
      (error: any) => {

        let errorMessage = '';           
        switch(error.status) { 
          case 404: { 
            errorMessage = 'Error al obtener las novedades'; 
              break; 
          } 
          case 401: {  
            errorMessage = 'Usted no esta autorizado para acceder a este recurso';
              break; 
          } 
          default: { 
            errorMessage = 'Error desconocido';
              break; 
          } 
        }

        //
        const dialogRef = this.dialog.open(StandarDialogComponent, {
          height: '300px',
          width: '400px',
          data: {
            type: "error",
            titleToShow:"",
            messageToShow: errorMessage,
            showButtonsOkCancel: false
          },
        });            
        
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`); 
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
