import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ActivitiesService } from 'src/app/features/services/activities/activities.service';
import { environment } from 'src/environments/environment';


//Los Effects son metodos que obtienen por ejemplo datos de la api
//PREGUNTAR QUE MAS HACE EL EFFECTS
//https://ngrx.io/guide/effects

@Injectable()
export class ActivityEffect {
  //Injecto las actions que existen, en este caso voy a usar la action que es buscar en la api las activiadades
  //Injecto el servicio de las activities  
  constructor(
    private actions$: Actions,
    private activitiesService: ActivitiesService
  ) {
    
  }

  //Primero busco en las actions la actions que necesito, la busco con ofType
  //Luego busco las actividades y retono un objeto (la action) con el nombre de la action y el listado de las actividades obtenidas de la api
  //Esto sucede cuando recibo las actividades cuando me subscribo 
  
 
  loadActivities$ = createEffect(() =>
  this.activitiesService
           .getActivities(environment.activitiesApiUrl).pipe(map((data) => ({ type: 'X[Activity API] Activity API Success', allActivities: data.data })))
    // this.actions$.pipe(
    //   ofType('[Activity API] Invoke API'),
    //   mergeMap(() =>
    //     this.activitiesService
    //       .getActivities(environment.activitiesApiUrl)
    //       .pipe(map((data) => ({ type: '[Activity API] Activity API Success', allActivities: data.data })))
      
    //       )
    // )
  );
}