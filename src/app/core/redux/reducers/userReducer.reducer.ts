import { createReducer, on } from '@ngrx/store';
import { userState } from '../actions/user.actions';

export const initialState = '';

const _userReducer = createReducer(
  initialState,
  on(userState, (state) => state),
);

export function userReducer(state:any, action:any) {
  return _userReducer(state, action);
}   