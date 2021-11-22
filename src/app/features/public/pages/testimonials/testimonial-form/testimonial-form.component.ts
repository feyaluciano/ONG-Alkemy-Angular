import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../../../../../../environments/environment';
import { StandarDialogComponent } from '../../../../../shared/components/standar-dialog/standar-dialog.component';
import { Testimonial } from '../../../../models/testimonial.model';

import { Router } from '@angular/router';
import { TestimonialsService } from 'src/app/features/services/testimonials/testimonials.service';

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent implements OnInit {
  testimonials!: Testimonial[];
  dialog!: MatDialog;
  testimonialsCompleted: boolean = false;
  isHome!: boolean;

  constructor(
    private testimonialsSvc: TestimonialsService,
    private router: Router
  ) {
    this.testimonialsSvc.getTestimonials(environment.testimonialsApiUrl)
      .subscribe((resp: any) => {
        setTimeout(() => {
          if (this.router.url === '/home') {
            const testimonials = resp.data;
            this.testimonials = testimonials.slice(0, 4); 
            this.isHome = true;      
          } else {
            this.testimonials = resp.data;
            this.isHome = false;
          }
        }, 500);
      },
      (error) => {
        let errorMessage = '';           
        switch(error.status) { 
          case 404: { 
            errorMessage = 'Error al obtener los testimonios'; 
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
          this.testimonialsCompleted = true;
        }, 500);
      });
  }

  ngOnInit(): void {
  }

}
