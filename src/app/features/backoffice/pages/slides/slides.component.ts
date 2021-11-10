import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from '../../../../../environments/environment';
import { Slide } from '../../../public/models/slide';
import { SlidesService } from '../../../services/slides/slides.service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  action: string = 'Slides';
  slides!: Slide[];

  constructor(
    private slidesSvc: SlidesService,
    private router: Router
  ) {
    this.slidesSvc.getSlides(environment.slidesApiUrl)
      .subscribe((resp: any) => {
        this.slides = resp.data;
      })
  }

  ngOnInit(): void {
  }

  redirectToCreate(): void {
    this.router.navigate(['/backoffice/slide']);
  }

  deleteSlide(id: string | undefined, index: number): void {
    this.slidesSvc.deleteSlide(`/slides/${id}`)
      .subscribe((resp: any) => {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: resp.message,
          showConfirmButton: true
        });

        this.slides.splice(index, 1);

      });
  }

  editSlide(id: string | undefined): void {
    this.router.navigate(['/backoffice/slide', id]);
  }

}
