import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";



import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { ActivitiesService } from "src/app/features/services/activities/activities.service";

import { findAllActivities,findAllActivitiesSuccess,findAllActivitiesError } from '../actions/activities.actions';

import { environment } from 'src/environments/environment';



@Injectable()
export class AuthEffects {

    

    findAllActivities$ = createEffect(() =>
    this.actions$.pipe(     
      ofType(findAllActivities),
      switchMap(() =>
        this.activitiesService.getActivities()
      ),    
     map(activities => JSON.parse(JSON.stringify(activities.data))),       
      map(
        (activitiesR) =>findAllActivitiesSuccess({payloadActivity:activitiesR}),         
        catchError((error) =>
          of(findAllActivitiesError({ error }))
        )
      )
    )
  );


    constructor(private actions$: Actions, private activitiesService: ActivitiesService ){

    }
}