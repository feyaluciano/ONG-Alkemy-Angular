import { createReducer, on } from "@ngrx/store"
import { Activity } from "src/app/features/models/Activity";
import { User } from "src/app/features/models/User";
import { addActivity,removeActivity,invokeActivityAPI, retrievedActivityList } from   './activities.actions';

//export let initialState: Activity[] = [];

export const initialState: ReadonlyArray<Activity> = [];


// const tarea1: Activity = {
//   id: '1',
//   name: 'la actividad 1',
//   description: 'la descrtppp'
// }
// initialState.push(tarea1);


export const activityReducer = createReducer(
    initialState,
    //El Reducer recibe el estado actual, y la actividad a agregar.
    //Como el estado es inmutable, clono (...) el estado actual, elimino, o borro o hago la accion necesaria y lo retorno.
    //al retornarlo este será el array que se tendrá en el store.
    on(addActivity, (state, { activity }) => {  
      let activities:Activity[]= [...state];
      activities.push(activity);    
      return activities;      
    }),
    on(removeActivity, (state,  activity ) => {        
      let activities:Activity[]= [...state];      
      let position=activities.findIndex(x => x.id === activity.id)
      activities.splice(position,1);
      return activities;      
    }),
    on(retrievedActivityList, (state,  activity ) => {
      let fromApi:any= JSON.parse(JSON.stringify(activity));              
      return fromApi.allActivities;      
    })

);

