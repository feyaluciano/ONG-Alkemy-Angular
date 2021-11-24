import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ActivitiesService } from 'src/app/features/services/activities/activities.service';
import { getActivityList,setActivityListState } from '../actions/activities.actions';

@Injectable()
export class ActivityEffects {


  loadActivity$ = createEffect(() => this.actions$.pipe(
    ofType(getActivityList),
    mergeMap(() => this.activityServices.getActivities()
      .pipe(
        map((activities:any)=> setActivityListState({activitiesList:activities.data}),
        catchError(() => EMPTY)
      ))
    )
  ));


constructor(
  private actions$: Actions,
  private activityServices:ActivitiesService
) {}

}