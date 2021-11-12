import { Action, createAction, props } from '@ngrx/store'
import { Activity } from 'src/app/features/models/Activity';

export const addActivity      = createAction('[From Activity] Add Activity',  props<{ activity: Activity }>() );
export const removeActivity = createAction('[From Activity] Remove Activity', props<Activity>());
export const invokeActivityAPI = createAction('[Activity API] Invoke API');

export const retrievedActivityList = createAction(
  '[Activity API] Activity API Success',
  props<{ activities: Activity[] }>()
);

