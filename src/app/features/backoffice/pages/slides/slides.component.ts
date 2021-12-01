import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounce, debounceTime } from 'rxjs/operators';
import { getSlideList, searchSlide, setSlideListState } from 'src/app/core/redux/actions/slides.actions';
import { SlideListState } from 'src/app/core/redux/reducers/slides.reducer';
import { getSlide, getSlideState } from 'src/app/core/redux/selectors/slide.selector';
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

  searchSlides:FormGroup = this.fb.group({
    searchSlide: ['']
  })

  constructor(
    private store:Store<SlideListState>,
    private router: Router,
    private slidesSvc: SlidesService,
    private fb: FormBuilder
  ) {
    

    this.slideList$ = this.store.pipe(select(getSlide));

  }


  ngOnInit(): void {  
    this.store.dispatch(getSlideList())
    setTimeout(()=>{
      this.slidesCompleted = true;
    },2000); 
    
    
    this.searchSlides.valueChanges.pipe(debounceTime(1000)).subscribe(data=>{
      if(data.searchSlide.length>=3){
        this.store.dispatch(searchSlide({slideList: data.searchSlide}))
      }else{
        this.store.dispatch(getSlideList())
      }
    })
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

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.searchSlides.get(input)?.hasError(type) && this.searchSlides.get(input)?.touched
    );
  }

  searchSlide(){ 

    let Text = this.searchSlides.controls['searchSlide'].value;

    if(Text.length >= 3){
        
        
      this.store.dispatch(searchSlide({slideList: Text}));
      
    } else {
      
      this.store.dispatch(getSlideList());
    }
  }

}
