import { Action, createReducer, on } from '@ngrx/store';
import { findAlluserSuccess, userState } from '../actions/user.actions';

export const initialState = '';

export const _userReducer = createReducer(
  initialState,
  on(userState, (state:any) => ({
    ...state,
  })),
  on(findAlluserSuccess, (state, {payload }) => {
    return [...state, ...payload];    
  }),
);

