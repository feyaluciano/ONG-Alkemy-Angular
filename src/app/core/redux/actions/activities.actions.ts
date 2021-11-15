import { createAction, props } from '@ngrx/store';
import { Activity } from 'src/app/features/models/Activity';

export const findAllActivities        = createAction('[ Activity ] Find All Activities');
export const findAllActivitiesSuccess = createAction('[ Activity ] Find All Activities Success', props<{ payloadActivity: Array<Activity> }>());
export const findAllActivitiesError = createAction('[ Activity ] Find All Activities Error',props<{ error: any }>());

