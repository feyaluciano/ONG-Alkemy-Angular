import { Action, createReducer, on } from "@ngrx/store"
import { User } from "src/app/features/models/User";
import { login,loginGoogle, logout, setAuthState } from '../actions/auth.actions';


export interface AuthState {
    auth: boolean;
    user: User | null;
    token: string | null;
}

export const initialState: AuthState = {
    auth: false,
    user: null,
    token: null
}

const _authReducer = createReducer(
    initialState,
   on(setAuthState, (state , setAuthState ) => ({
       ...state,
       auth: setAuthState.success,
       user: setAuthState.data,
       token: setAuthState.token
   })),
   on(logout, state => ({...state, auth: false, user: null, token: null })),
   on(loginGoogle, state => ({...state, auth: true, user: null, token: null })),
   on(login, state => ({...state, auth: true, user: null, token: null }))
);

export function authReducer(state: AuthState = initialState, action: Action){
    return _authReducer(state,action);
}