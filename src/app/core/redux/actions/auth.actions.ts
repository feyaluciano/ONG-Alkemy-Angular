import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/features/models/User';

interface IAuthProps {
    user: User , 
    token: string
}

export const login      = createAction('[Authentication] Login', props<IAuthProps>() );
export const register   = createAction('[Authentication] Register', props<IAuthProps>() );
export const logout     = createAction('[Authentication] Logout');