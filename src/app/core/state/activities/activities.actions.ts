import { Action, createAction, props } from '@ngrx/store'
import { Activity } from 'src/app/features/models/Activity';

export const addActivity      = createAction('[From Activity] Add Activity',  props<{ activity: Activity }>() );
export const removeActivity = createAction('[From Activity] Remove Activity', props<Activity>());

