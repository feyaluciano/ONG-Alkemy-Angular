import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/features/models/User';

export const login      = createAction('[Authentication] Login', props<{ user: User , token: string }>() );
export const register   = createAction('[Authentication] Register', props<{ user: User , token: string }>() );
export const logout     = createAction('[Authentication] Logout');