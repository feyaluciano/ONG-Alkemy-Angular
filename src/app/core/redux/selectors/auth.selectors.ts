import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/authReducer.reducer";

export const getAuthState = createFeatureSelector<AuthState>('authReducer');

export const getAuth = createSelector(
    getAuthState,
    (state: AuthState) => state.auth
);  