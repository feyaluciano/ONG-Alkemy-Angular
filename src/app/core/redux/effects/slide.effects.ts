import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SlidesService } from 'src/app/features/services/slides/slides.service';
import { getSlideList,searchSlide,setSlideListState } from '../actions/slides.actions';
//import { SlidesService } from 'src/app/features/services/slides/slides.service';


@Injectable()
export class SlideEffects {


    loadSlide$ = createEffect(() => this.actions$.pipe(
        ofType(getSlideList),
        mergeMap(() => this.slideServices.getSlides()
          .pipe(
            map((slides:any)=> setSlideListState({slidesList:slides.data}),
            catchError(() => EMPTY)
          ))
        )
      ));

      searchSlide$ = createEffect(() => this.actions$.pipe(
        ofType(searchSlide),
        // tap((searchUsers)=> {console.log(searchUsers.user)}),
        mergeMap( searchSlidesAction => this.slideServices.searchSlide(searchSlidesAction.slideList)
          .pipe(
            map((slides:any)=> setSlideListState({slidesList:slides.data}),
            catchError(() => EMPTY)
          ))
        )
      ))
 
 
  constructor(
    private actions$: Actions,
    private slideServices:SlidesService
  ) {}
} 