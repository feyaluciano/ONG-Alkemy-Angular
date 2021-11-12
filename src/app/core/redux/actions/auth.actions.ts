import { createAction, props } from '@ngrx/store';


interface IAuthProps {
    email: string , 
    password: string
}

export const login      = createAction('[Authentication] Login', props<IAuthProps>() );
export const register   = createAction('[Authentication] Register', props<IAuthProps>() );
export const logout     = createAction('[Authentication] Logout');