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
  //Injecto las actions que existen, en este caso voy a usar la action que es buscar en la api las activiadades
  //Injecto el servicio de las activities  
  constructor(
    private actions$: Actions,
    private activitiesService: ActivitiesService
  ) { 
    
    

  
  }

  public tarea1: Activity = {
    id: '1',
    name: 'la actividad 1',
    description: 'la descrtppp'
  }

  findAllActivities$ = createEffect(() =>
  this.actions$.pipe(
    ofType(activitiesActions.findAllActivities),    
    switchMap(() => this.activitiesService.getActivities(environment.activitiesApiUrl)    ),  
    tap((result)=>result.data),
    //map(actividades=>  JSON.parse(JSON.stringify(actividades.data)) ,       
    map((activitiesR) => activitiesActions.findAllActivitiesSuccess(JSON.parse(JSON.stringify(activitiesR ))),
          catchError((error) => of(activitiesActions.findAllActivitiesError({ error })))        
    )
    

    
));


createActivity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(activitiesActions.createActivity),
      switchMap((action) =>
        this.activitiesService.createActivity(environment.activitiesApiUrl,action.payloadActivity).pipe(
          map(activida=>  JSON.parse(JSON.stringify(activida.data))) ,          
          map((activity) => activitiesActions.createActivitySuccess({ payloadActivity:activity })),
          catchError((error) => of(activitiesActions.createActivityError({ error })))
        )
      )
    )
  );

// //((result)=>JSON.parse(JSON.stringify(result.data)),
// createBook$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(activitiesActions.createActivity),
//       switchMap((action) => {
//       map((action) => activitiesActions.createActivitySuccess(action.activity)))),
//       catchError((error) => of(activitiesActions.createActivityError({ error })))
//       })
//       // switchMap((action) =>
//       //   this.bookService.create(action.book).pipe(
//          // map((book) => activitiesActions.createActivitySuccess({ book })),
//          // catchError((error) => of(bookActions.createBookFail({ error })))
//       //   )
//       // )
   
   
//       )
//   );


        }

//map((activities) => activitiesActions.findAllActivities(),
//// map(actividades => ({ type: activitiesActions.findAllActivities, actividades })),

// switchMap(() =>
// this.activitiesService.getActivities("laurl").pipe(
//   map((activit) => activitiesActions.findAllActivitiesSuccess({ activit })),
//   catchError((error) => of(activitiesActions.findAllActivitiesError({ error })))
// )
// )



/*
  findAllActivities$ = createEffect(() =>
  this.actions$.pipe(
    ofType(activitiesActions.findAllActivities),
    


    switchMap(() =>
      this.activitiesService.getActivities("url").pipe(
        map(activities=>JSON.parse(JSON.stringify(activities.data)),
        map((activities) => activitiesActions.findAllActivitiesSuccess({ activities })),
        catchError((error) => of(bookActions.findAllActivitiesError({ error })))
      )
    )




  )
);
*/

//   createBook$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(activitiesActions.createActivity),
//     switchMap((action) =>
//       this.activitiesService.createActivity("laurl",action.activity)
//       .pipe(
//         map((activity) => activitiesActions.createActivitySuccess({ activity })),
//         catchError((error) => of(activitiesActions.createActivityError({ error })))
//       )
//     )
//   )
// );
     // }

//   findAllActivities$ = createEffect(() =>
//   this.actions$.pipe(
//     ofType(activitiesActions.findAllActivities),          
//   )
// );

// createActivity$ = createEffect(() =>
// this.actions$.pipe(
//   ofType(activitiesActions.createActivity),
//   map((activity) => activitiesActions.createActivitySuccess({ action.payload })) }),
  
// )
// );




//}




// switchMap(() =>
//     .getActivities(environment.activitiesApiUrl)
//       .pipe(
//         map((activities) => activitiesActions.findAllActivitiesSuccess({ activities })),
//         catchError((error) => of(bookActions.findAllActivitiesFail({ error })))
//       )
//     )



// findAllActivities$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(activitiesActions.findAllActivities),
//       switchMap(() =>
//         this.activitiesService.getActivities().pipe(
//           map((activities) => activitiesActions.findAllActivitiesSuccess({ activities })),
//           catchError((error) => of(bookActions.findAllBooksFail({ error })))
//         )
//       )
//     )
//   );


/*

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


  addActivities$ = createEffect(() => {  
  return this.actions$.pipe(
    //ofType("[Activity API] Activity API Success"),
    ofType(activitiesActions.addActivity),
    switchMap( () => {
       // console.log(activity)
       let act:Activity={id:"1"};
       return {act};
    })
  )
  }
    
);


//   addActivities$ = createEffect(() =>{
//     this.actions$.pipe()
//      //let activities:Activity[]= [...state];
//     //   activities.push(activity);    
//   // this.actions$.pipe(
//   //   ofType(activitiesActions.addActivity),
//   //   mergeMap(() =>
//   //     this.activitiesService
//   //       .getActivities(environment.activitiesApiUrl)
//   //       .pipe(map((data) => ({ type: '[Activity API] Activity API Success', allActivities: data.data })))      
//   //       )
//   )
// );

}
*/