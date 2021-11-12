import { createReducer, on } from "@ngrx/store"
import { Activity } from "src/app/features/models/Activity";
import { User } from "src/app/features/models/User";
import { addActivity,removeActivity,invokeActivityAPI } from   './activities.actions';

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
    })

);

//invokeActivityAPI
// 1 - Importaciones

//import { ActivitiesActions } from "./activities.actions";
/*
import { createReducer } from '@ngrx/store';
import { on } from 'cluster';
import { Activity } from 'src/app/features/models/Activity';
import { addActivity } from   './activities.actions';


export let initialState: Activity[] = [];
const tarea1: Activity = {
  id: '1',
  name: 'la actividad 1',
  description: 'la descrtppp'
}
initialState.push(tarea1);

// 2 - Estado inicial
// const initialState: Task = {
//   name: 'First Task',
//   state: 'Pending'
// }


export const activityReducer = createReducer(
  initialState,
  on(add_activity, (state, add_activity) => ({id:'2'}))
  //on( addActivity, (state,activity)  => (activity)),  // ver documentación efectos
  //on( addActivity, (state, {  })  => ({...state}))
  //on( removeActivity, (state,register)  => ({auth:true, user: register.user, token: register.token })),
  
);


// export function activityReducer(state: Activity[] = initialState, action: Actions.ActionsActivities) {
//   alert("aa"+action.type)
//   switch (action.type) {
//     case Actions.ADD_ACTIVITY:{     
//       return [...state, action.payload];
//     }
  
//     case Actions.GET_ACTIVITIES:{
//       //alert(JSON.stringify(action.payload));     
//       return [...state];
//     }
//     default:
//       return state;
//   }
// }


//this.activitiesService
//.getActivities(environment.activitiesApiUrl)

// 3 - Switch con las funciones puras
// export function taskReducer(state: Activity[] = [initialState], action: ActivitiesActions) {
//   switch (ActivitiesActions.type) {
//     case ActivitiesActions.:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

// export function activityReducer(state: Activity[] = initialState, action: ActivitiesActions.ActionsActivities) {
//   initialState,
//   switch (action.type) {
//     case ActivitiesActions.ADD_ACTIVITY:
//       return [...state, action.payload];
//     default:
//       return state;
//   }

// }

/*
import { createReducer, on } from '@ngrx/store';
import { Activity } from '../../models/Activity';
import { retrievedActivityList } from './activities.actions';

export const initialState: ReadonlyArray<Activity> = [];



const _activityReducer = createReducer(
    initialState,
    on(retrievedActivityList, (state, { allActivities }) => {
      return [...allActivities];
    })
  );

  //Este reducer recibe un estado y una acción, y devuelve un nuevo estado.
  //El estado que recibe es el estado con la lista de actividades modificadas
  export function activityReducer(state: any, action: any) {
    return _activityReducer(state, action);
  }*/
