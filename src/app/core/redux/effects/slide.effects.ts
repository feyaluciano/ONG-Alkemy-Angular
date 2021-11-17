import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SlidesService } from 'src/app/features/services/slides/slides.service';
import { getSlideList,setSlideListState } from '../actions/slides.actions';
//import { SlidesService } from 'src/app/features/services/slides/slides.service';


@Injectable()
export class SlideEffects {


    loadSlide$ = createEffect(() => this.actions$.pipe(
        ofType(getSlideList),
        mergeMap(() => this.slideServices.getSlides("aaa")
          .pipe(
            map((slides:any)=> setSlideListState({slidesList:slides.data}),
            catchError(() => EMPTY)
          ))
        )
      ));
 
 
  constructor(
    private actions$: Actions,
    private slideServices:SlidesService
  ) {}
} 