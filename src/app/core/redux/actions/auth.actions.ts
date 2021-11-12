import { createAction, props } from '@ngrx/store';
import { User } from '../../../features/models/User';



export interface IAuthProps {
    name?: string;
    email: string, 
    password: string
}

interface IAuthPropsResponse {
    success: boolean,
    data: User,
    token: string
}



export const login      = createAction('[Authentication] Login', props<IAuthProps>() );
export const register   = createAction('[Authentication] Register', props<IAuthProps>() );
export const logout     = createAction('[Authentication] Logout');

export const setAuthState = createAction('[Authentication] Auth State Modified', props<IAuthPropsResponse>() );

//export const loginError = createAction('[Authentication] Auth State Error', props<any>());