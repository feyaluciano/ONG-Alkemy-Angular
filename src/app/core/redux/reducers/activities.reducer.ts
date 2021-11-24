import { Action, createReducer, on } from "@ngrx/store"
import { Activity } from "src/app/features/models/Activity";
import { setActivityListState } from "../actions/activities.actions";
export interface ActivityListState{
  activitiesList:Activity[] | null;
}

export const initialState:ActivityListState = {
  activitiesList:null
};


export const _activityReducer = createReducer(
initialState,
on(setActivityListState, (state, setActivityListState) => ({
   ...state,
    slideList:  setActivityListState.activitiesList
})),
);

export function activityReducer(state= initialState, action: Action){
return _activityReducer(state,action);
}




