import { Action, createReducer, on } from "@ngrx/store"
import { Activity } from "src/app/features/models/Activity";
import * as activityState from './activity.state';


import * as activityActions from   './activities.actions';
import { HTTPResponse } from "src/app/features/models/HTTPResponse";
const tarea1: Activity = {
  id: '1',
  name: 'la actividad 1',
  description: 'la descrtppp'
}


const activityReducer = createReducer(
  activityState.initialstate,
  
  //Esto se ejecutara cuando se llame a la action findAllActivities
  //al invocarse se llamara a su effect y le pasara los datos siguientes
  on(activityActions.findAllActivities, (state) => ({
    ...state,       
    action: activityActions.type.FIND_ALL_ACTIVITIES,    
    loading: true,
    error: null,
  })),
  // on(activityActions.findAllActivitiesSuccess, (state, { payloadActivity }) => {
  //   return bookState.adapter.setOne(book, {
  //     ...state,
  //     loading: false,
  //   });
  // }),

  on(activityActions.findAllActivitiesSuccess, (state, { payloadActivity }) => {
    alert(JSON.stringify(payloadActivity))
    return activityState.adapter.addMany(payloadActivity, {
      ...state,
      loading: false,
    });
  }),


  //Este reducer se ejecutara si el pedido a la api es correcto, sera ejecutado por el efect, con un mergeMap, que toma el obs y
  // genera uno nuevo, ahora con el resultado de ejecutar el action findAllActivitiesSuccess, este reducer si carga en el state las actividades  
  //on(activityActions.findAllActivitiesSuccess, (state, { payloadActivity }) => {    
    
    ///let activityState:activityState.ActivityState={actividades:activitiesAR}
//return activityState;
    //let act:HTTPResponse<Activity[]>=activitiesAR;

    // return activityState.adapter.addMany(activitiesAR, {
    //   ...state,
    //   actividades: [...state.actividades, state.actividades.push(activitiesAR)],     
    //   loading: false,
    // });
  //}),
  //Este reducer se ejecutara si el pedido a la api es correcto, sera ejecutado por el efect, con un mergeMap, que toma el obs y
  // genera uno nuevo, ahora con el resultado de ejecutar el action findAllActivitiesSuccess
  on(activityActions.findAllActivitiesError, (state, { error }) => ({
    ...state,
    error: {...error},
    loading: false,
  })),

  //CREATE
  on(activityActions.createActivity, (state) => ({
    ...state,
    action: activityActions.type.CREATE_ACTIVITY,
    loading: true,
    error: null,
  })),
  
  on(activityActions.createActivitySuccess, (state, { payloadActivity }) => {
    return activityState.adapter.addOne(payloadActivity, {
      ...state,
      actividades: [...state.actividades, payloadActivity],
      loading: false,
    });
  }),
  on(activityActions.createActivityError, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  })),

  
  );

  export function reducer(state: activityState.ActivityState, action: Action) {
    return activityReducer(state, action);
  }
