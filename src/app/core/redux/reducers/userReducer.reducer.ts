import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/features/models/User';
import {  setUserListState } from '../actions/user.actions';


  export interface UserListState{
    userList:User[] | null;
  }

  export const initialState:UserListState = {
    userList:null
  };


export const _userReducer = createReducer(
  initialState,
  on(setUserListState, (state, setUserListState) => ({
     ...state,
      userList:  setUserListState.usersList
  })),
);

export function userReducer(state= initialState, action: Action){
  return _userReducer(state,action);
}
