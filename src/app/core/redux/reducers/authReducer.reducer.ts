import { createReducer, on } from "@ngrx/store"
import { User } from "src/app/features/models/User";
import { setAuthState } from '../actions/auth.actions';

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

export const authReducer = createReducer(
    initialState,
    // ver documentación efectos
   on(setAuthState, (state , setAuthState ) => ({
       ...state,
       auth: setAuthState.success,
       user: setAuthState.data,
       token: setAuthState.token
   }))
);