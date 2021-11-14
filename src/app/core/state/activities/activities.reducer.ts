import { Action, createReducer, on } from "@ngrx/store"
import { Activity } from "src/app/features/models/Activity";
import { User } from "src/app/features/models/User";
//import { addActivity,removeActivity,invokeActivityAPI, retrievedActivityList } from   './activities.actions';

import * as activityState from './activity.state';


import * as activityActions from   './activities.actions';


//export let initialState: Activity[] = [];

//export const initialState: Activity[] = [];

const tarea1: Activity = {
  id: '1',
  name: 'la actividad 1',
  description: 'la descrtppp'
}
// initialState.push(tarea1);


//alert(JSON.stringify(activityState.initialstate.actividades))



const activityReducer = createReducer(
  activityState.initialstate,
  on(activityActions.findAllActivities, (state) => ({
    ...state,
    action: activityActions.type.FIND_ALL_ACTIVITIES,    
    loading: true,
    error: null,
  })),

  on(activityActions.findAllActivitiesSuccess, (state, { activitiesR }) => {
    //alert(JSON.stringify(state))
    return activityState.adapter.addMany(activitiesR, {
      ...state,
      activities: activitiesR,
      loading: false,
    });
  }),
  on(activityActions.findAllActivitiesError, (state, { error }) => ({
    ...state,
    error: {...error},
    loading: false,
  })),


  
  );

  export function reducer(state: activityState.ActivityState, action: Action) {
    return activityReducer(state, action);
  }

  // SELECT ONE
 // FIND ALL
//  on(activityActions.findAllActivities, (state) => ({
//   ...state,
//   action: activityActions.type.FIND_ALL_ACTIVITIES,
//   loading: true,
//   error: null,
// })),
// on(activityActions.createActivity, (state) => ({
//   ...state,
//   action: activityActions.type.CREATE_ACTIVITY,
// })),

// on(activityActions.createActivity, (state) => ({
//   ...state,
//   action: activityActions.type.CREATE_ACTIVITY,
//   loading: true,
//   error: null,
// })),
// on(activityActions.createActivitySuccess, (state, { activity }) => {

//   return [...state,activity];

//   // return state.addOne(activity, {
//   //   ...state,
//   //   loading: false,
//   // });
// }),



// on(bactivityActions.createActivitySuccess, (state, { book }) => {
//   return bookState.adapter.addOne(book, {
//     ...state,
//     loading: false,
//   });
// }),

// on(activityActions.createActivityError, (state, { error }) => ({
//   ...state,
//   error: { ...error },
//   loading: false,
// })),


// on(activityActions.createActivityError, (state, { error }) => ({
//   ...state,
//   error: { ...error },
//   loading: false,
// })),





// const tarea1: Activity = {
//   id: '1',
//   name: 'la actividad 1',
//   description: 'la descrtppp'
// }
// initialState.push(tarea1);


//  const _activityReducer = createReducer(
//     initialState,
//     //El Reducer recibe el estado actual, y la actividad a agregar.
//     //Como el estado es inmutable, clono (...) el estado actual, elimino, o borro o hago la accion necesaria y lo retorno.
//     //al retornarlo este será el array que se tendrá en el store.
//     on(activitiesActions.addActivity, (state,  anactividad ) => {  
//       // let activities:Activity[]= [...state];
//       // activities.push(activity);    
//       // return activities;      
//       //return [...state];
//       return [];
//     }),
//     on(activitiesActions.removeActivity, (state,  activity ) => {        
//       let activities:Activity[]= [...state];      
//       let position=activities.findIndex(x => x.id === activity.id)
//       activities.splice(position,1);
//       return activities;      
//     }),
//     on(activitiesActions.retrievedActivityList, (state,  activity ) => {
//       let fromApi:any= JSON.parse(JSON.stringify(activity));              
//       return fromApi.allActivities;      
//     })

//);




// export function activityReducer(state:any,action:any){
//   return _activityReducer(state,action);
// }
