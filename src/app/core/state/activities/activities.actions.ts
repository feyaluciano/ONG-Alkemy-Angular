import { Action, createAction, props } from '@ngrx/store'
import { Activity } from 'src/app/features/models/Activity';





export enum type {
  CREATE_ACTIVITY            = '[ Activity ] Create Activity',
  CREATE_ACTIVITY_SUCCESS    = '[ Activity ] Create Activity Success',
  CREATE_ACTIVITY_ERROR    = '[ Activity ] Create Activity Error',

  FIND_ALL_ACTIVITIES         = '[ Activity ] Find All Activities',
  FIND_ALL_ACTIVITIES_SUCCESS = '[ Activity ] Find All Activities Success',
  FIND_ALL_ACTIVITIES_ERROR = '[ Activity ] Find All Activities Error',
  
  
  DELETE_ACTIVITY            = '[ Activity ] Delete Activity',
  DELETE_ACTIVITY_SUCCESS    = '[ Activity ] Delete Activity Success',
}

export const findAllActivities        = createAction(type.FIND_ALL_ACTIVITIES);
export const findAllActivitiesSuccess = createAction(type.FIND_ALL_ACTIVITIES_SUCCESS, props<{ activitiesAR: Array<Activity> }>());
export const findAllActivitiesError = createAction(type.FIND_ALL_ACTIVITIES_ERROR,props<{ error: any }>());

export const createActivity          = createAction(type.CREATE_ACTIVITY, props<{ payloadActivity: Activity }>());
export const createActivitySuccess   = createAction(type.CREATE_ACTIVITY_SUCCESS, props<{ payloadActivity: Activity }>());
export const createActivityError   = createAction(type.CREATE_ACTIVITY_ERROR, props<{ error: any }>());



export const deleteActivity          = createAction(type.DELETE_ACTIVITY, props<{ id: string }>());
export const deleteActivitySuccess   = createAction(type.DELETE_ACTIVITY_SUCCESS, props<{ id: string }>());











/*export const addActivity      = createAction('[From Activity] Add Activity',  props<{ activity: Activity }>() );
export const removeActivity = createAction('[From Activity] Remove Activity', props<Activity>());
export const invokeActivityAPI = createAction('[Activity API] Invoke API');



export const retrievedActivityList = createAction(
  '[Activity API] Activity API Success',
  props<{ activities: Activity[] }>()
);
*/

