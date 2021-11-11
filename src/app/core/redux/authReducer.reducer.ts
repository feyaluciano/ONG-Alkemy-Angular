import { createReducer, on } from "@ngrx/store"
import { User } from "src/app/features/models/User";
import { login, logout, register } from './authReducer.actions';

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
    on( login, (state,login)  => ({auth:true, user: login.user, token: login.token })),
    on( register, (state,register)  => ({auth:true, user: register.user, token: register.token })),
    on( logout, state => ({auth: false, user:null, token:null }))
);