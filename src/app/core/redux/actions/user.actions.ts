import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/features/models/User';

export const getUserList = createAction('[User List] List User');    
export const setUserListState = createAction('[ User ] Find All User Success', props<{ usersList:User[] }>());

export const searchUsers = createAction('[User List] Searching user', props<{ user:string }>());
