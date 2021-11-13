import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { ActivitiesService } from 'src/app/features/services/activities/activities.service';
import { environment } from 'src/environments/environment';
import * as activitiesActions from   './activities.actions';


//Los Effects son metodos que obtienen por ejemplo datos de la api, 
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
  
 
  //Cuando invoco al action invokeActivityAPI() en el ngOnInit() del componente activities.component.ts
  //se eejcuta la accion ubicada en el archivo de efectos (PREGUNTAR COMO ES QUE ASOCIAN EL ACTION invokeActivityAPI CON ESTE loadActivities$)
  //Luego de obtener los datos de la API, ejecuta el action retrievedActivityList ya que su tipo es:[Activity API] Activity API Success 
  //al ejecutarse este almacena en el store las actividades traidas de la api.
  loadActivities$ = createEffect(() =>  
    this.actions$.pipe(
      ofType('[Activity API] Invoke API'),
      mergeMap(() =>
        this.activitiesService
          .getActivities(environment.activitiesApiUrl)
          .pipe(map((data) => ({ type: '[Activity API] Activity API Success', allActivities: data.data })))      
          )
    )
  );

  addActivities$ = createEffect(() =>{
    re
     //let activities:Activity[]= [...state];
    //   activities.push(activity);    
  // this.actions$.pipe(
  //   ofType(activitiesActions.addActivity),
  //   mergeMap(() =>
  //     this.activitiesService
  //       .getActivities(environment.activitiesApiUrl)
  //       .pipe(map((data) => ({ type: '[Activity API] Activity API Success', allActivities: data.data })))      
  //       )
  )
);

}