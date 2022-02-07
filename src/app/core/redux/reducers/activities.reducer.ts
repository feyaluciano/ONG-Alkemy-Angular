import { Action, createReducer, on } from "@ngrx/store"
import { Activity } from "src/app/features/models/Activity";
import { setActivityListState } from "../actions/activities.actions";
export interface ActivityListState{
  activityList:Activity[] | null;
}

export const initialState:ActivityListState = {
  activityList:null
};

//A LA ACCION DE OBTENER EL LISTADO DE ACTIVIDADES SE LE PASA UN ESTADO INCIAL(EN ESTE CASO NULL, YA Q LA LISTA INCIA VACIA)
//LE PASO LA FUNCION, LA ACCION setActivityListState PARA QUE LA EJECUTE, ESTA SE
export const _activityReducer = createReducer(
initialState,
on(setActivityListState, (state, setActivityListState) => ({
   ...state,
    activityList:  setActivityListState.activitiesList
})),
);

export function activityReducer(state= initialState, action: Action){
return _activityReducer(state,action);
}




