import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserListState } from "../reducers/userReducer.reducer";

export const getUserState = createFeatureSelector<UserListState>('userReducer');

export const getUser = createSelector(
    getUserState,
    (state:UserListState) => state.userList
);  