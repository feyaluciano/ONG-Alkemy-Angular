import { createReducer, on } from "@ngrx/store"
import { Activity } from "src/app/features/models/Activity";
import { User } from "src/app/features/models/User";
//import { addActivity,removeActivity,invokeActivityAPI, retrievedActivityList } from   './activities.actions';

import * as activitiesActions from   './activities.actions';


//export let initialState: Activity[] = [];

export const initialState: Activity[] = [];


// const tarea1: Activity = {
//   id: '1',
//   name: 'la actividad 1',
//   description: 'la descrtppp'
// }
// initialState.push(tarea1);


 const _activityReducer = createReducer(
    initialState,
    //El Reducer recibe el estado actual, y la actividad a agregar.
    //Como el estado es inmutable, clono (...) el estado actual, elimino, o borro o hago la accion necesaria y lo retorno.
    //al retornarlo este será el array que se tendrá en el store.
    on(activitiesActions.addActivity, (state,  action ) => {  
      // let activities:Activity[]= [...state];
      // activities.push(activity);    
      // return activities;      
      //return [...state];
      return [];
    }),
    on(activitiesActions.removeActivity, (state,  activity ) => {        
      let activities:Activity[]= [...state];      
      let position=activities.findIndex(x => x.id === activity.id)
      activities.splice(position,1);
      return activities;      
    }),
    on(activitiesActions.retrievedActivityList, (state,  activity ) => {
      let fromApi:any= JSON.parse(JSON.stringify(activity));              
      return fromApi.allActivities;      
    })

);

export function activityReducer(state:any,action:any){
  return _activityReducer(state,action);
}
