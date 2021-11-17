import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getSlideList } from 'src/app/core/redux/actions/slides.actions';
import { SlideListState } from 'src/app/core/redux/reducers/slides.reducer';
import { getSlide } from 'src/app/core/redux/selectors/slide.selector';
import Swal from 'sweetalert2';
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
  slidesCompleted: boolean = false;
  slideList$: Observable<Slide[] | null> ;

  listSlides:Slide[]=[];

  constructor(
    private store:Store<SlideListState>,
    private router: Router,
    private slidesSvc: SlidesService
  ) {
    

    this.slideList$ = this.store.pipe(select(getSlide));

  }

  ngOnInit(): void {  
    this.store.dispatch(getSlideList())
    setTimeout(()=>{
      this.slidesCompleted = true;
    },2000);        
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
