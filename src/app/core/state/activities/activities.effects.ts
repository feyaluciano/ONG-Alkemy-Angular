import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { props } from '@ngrx/store';
import { Activity } from 'src/app/features/models/Activity';
import { ActivitiesService } from 'src/app/features/services/activities/activities.service';
import { environment } from 'src/environments/environment';
import * as activitiesActions from   './activities.actions';
import { of } from 'rxjs';

import { catchError, map, switchMap, tap } from 'rxjs/operators';



@Injectable()
export class ActivityEffect {
  //Injecto las actions que existen, en este caso voy a usar la action que es buscar en la api las activiadades y un create q agrega
  //  una nueva actividad a la bd mediamte la api, y agrega esta al state. al array de actividades
  //Injecto el servicio de las activities
  constructor(
    private actions$: Actions,
    private activitiesService: ActivitiesService
  ) {}

  
  //Este efect se ejecuta al ejecutarse el action findAllActivities
  findAllActivities$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activitiesActions.findAllActivities),
      switchMap(() =>
        this.activitiesService.getActivities(environment.activitiesApiUrl)
      ),      
      map(actividades=>  JSON.parse(JSON.stringify(actividades))) ,
      map(
        (activitiesR) =>
          activitiesActions.findAllActivitiesSuccess(
            JSON.parse(JSON.stringify(activitiesR))
          ),
        catchError((error) =>
          of(activitiesActions.findAllActivitiesError({ error }))
        )
      )
    )
  );

  
  createActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activitiesActions.createActivity),
      switchMap((action) =>
        this.activitiesService
          .createActivity(environment.activitiesApiUrl, action.payloadActivity)
          .pipe(
            //agregue el siguiente map porque el servicio me trae de la api un objeto HTTPResponse, el cual tiene las actividades
            //en un campo data
            map((activida) => JSON.parse(JSON.stringify(activida.data))),
            map((activity) =>
              activitiesActions.createActivitySuccess({
                payloadActivity: activity,
              })
            ),
            catchError((error) =>
              of(activitiesActions.createActivityError({ error }))
            )
          )
      )
    )
  );
}




        // public tarea1: Activity = {
        //   id: '1',
        //   name: 'la actividad 1',
        //   description: 'la descrtppp'
        // }