import { createAction, props } from '@ngrx/store';
import { Activity } from 'src/app/features/models/Activity';


export const getActivityList = createAction('[Activity List] List Activity');    
export const setActivityListState = createAction('[ User ] Find All Activity Success', props<{ activitiesList:Activity[] }>());