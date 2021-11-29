import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { NewsService } from 'src/app/features/services/news/news.service';
import { StandarDialogComponent } from 'src/app/shared/components/standar-dialog/standar-dialog.component';
import { News } from '../../../../models/news.interface';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news!: News[];
  form!: FormGroup;

  constructor(
    private newsSvc: NewsService,
    private router: Router,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({      
      search_new: ['', [Validators.required]]        
    });

    this.listNews();
  }

  ngOnInit(): void {
    this.form.valueChanges
    .pipe(debounceTime(1500))
    .subscribe(data => {         
      if (data.search_new.length >= 2) {
        this.searchNew(data.search_new);                
      } else {
        this.listNews();
      }
    });      
  }

  listNews() {
    this.newsSvc.getNews()
      .subscribe((resp: any) => {
        this.news = resp.data;
      });
  }

  searchNew(text:string) {
    this.newsSvc.searchNews(text)
      .subscribe((resp: any) => {
        this.news = resp.data;

        if (this.news.length === 0){          
            this.listNews();      
        }

      }, (error) => {
        let errorMessage = '';           
        switch(error.status) { 
          case 404: { 
            errorMessage = 'Error al buscar las novedades'; 
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
        this.dialog.open(StandarDialogComponent, {
          height: '300px',
          width: '400px',
          data: {
            type: "error",
            titleToShow:"",
            messageToShow: errorMessage,
            showButtonsOkCancel: false
          }
        });      
      });
  }

  newNew() {
    this.router.navigate(['/news/create']);
  }

  editNew(id: string | undefined) {
    this.router.navigate(['/news', id]);
  }

  deleteNew(id: string | undefined, index: number) {

    const dialogRef = this.dialog.open(StandarDialogComponent, {
      height: '300px',
      width: '400px',
      data: {
        type: "confirm",
        titleToShow:"",
        messageToShow: `¿Seguro de eliminar la novedad con id ${id}?`,
        showButtonsOkCancel: true
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.newsSvc.deleteNew(id)
        .subscribe(() => {
          this.dialog.open(StandarDialogComponent, {
            height: '300px',
            width: '400px',
            data: {
              type: "info",
              titleToShow:"",
              messageToShow: "Novedad eliminada satisfatoriamente",
              showButtonsOkCancel: false
            }
          });
        },
        () => {
          this.dialog.open(StandarDialogComponent, {
            height: '300px',
            width: '400px',
            data: {
              type: "error",
              titleToShow:"",
              messageToShow: "No se pudo eliminar la novedad",
              showButtonsOkCancel: false
            }
          });
        },
        () => {
          this.news.splice(index, 1);
        });
      }
    });

    
  }

}
