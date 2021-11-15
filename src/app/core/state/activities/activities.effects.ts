import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
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
      //Aca asocio cpn ofType, la action findAllActivities con el codigo que continua
      //Va a buscar a la api las actividades y luego con map ejecuta el action findAllActivitiesSuccess
      //el cual cambia el state
      ofType(activitiesActions.findAllActivities),
      switchMap(() =>
        this.activitiesService.getActivitiesSinResponse(environment.activitiesApiUrl)
      ),           
      map(
        (activitiesR) =>
          activitiesActions.findAllActivitiesSuccess({payloadActivity:activitiesR}
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
      switchMap((payloadActivity) =>
        this.activitiesService
          .createActivitySinResponse(environment.activitiesApiUrl, payloadActivity.payloadActivity)
          .pipe(            
            map((response) =>
              activitiesActions.createActivitySuccess({
                payloadActivity:response,
              })
            ),
            catchError((error) =>
              of(activitiesActions.createActivityError({ error }))
            )
          )
      )
    )
  );


  //El delete si hizo un poco mas complejo ya que al enviar el id a la api, este no devuelve el id borrado, sino
  //sino que devuelve success true/false. Entonces con el operator map, luego del delete, en vez de enviar el success que
  // es lo que enviaria si no lo intercepto con el map, envio el id a la accion deleteActivitySuccess
  deleteActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activitiesActions.deleteActivity),
      switchMap((payload) =>
        this.activitiesService.deleteActivity(payload.id).pipe(
          map( ()=> payload.id),
          map((response) => activitiesActions.deleteActivitySuccess({ id: response })),
          catchError((error) => of(activitiesActions.deleteActivityError({ error })))
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