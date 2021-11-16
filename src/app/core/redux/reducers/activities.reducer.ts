import { createReducer, on } from "@ngrx/store"
import { Activity } from "src/app/features/models/Activity";
import { User } from "src/app/features/models/User";
import { findAllActivities,findAllActivitiesSuccess,findAllActivitiesError } from '../actions/activities.actions';

const initialState:Activity[]=[];

export const activitiesReducer = createReducer(
    initialState,   
   //FIND ACTIVITIES
   on(findAllActivities, (state) => ({
    ...state,
  })),
  on(findAllActivitiesSuccess, (state, { payloadActivity }) => {
    return [...state, ...payloadActivity];    
  }),
  on(findAllActivitiesError, (state, { error }) => {
    return [...state, ...error];    
  }),


);