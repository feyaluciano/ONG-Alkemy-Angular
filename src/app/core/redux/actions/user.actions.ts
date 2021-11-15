import { createAction, props } from '@ngrx/store';

export const userState = createAction('[User Page] Load User');    
export const findAlluserSuccess = createAction('[ User ] Find All User Success', props<{ payload: Array<any> }>());
