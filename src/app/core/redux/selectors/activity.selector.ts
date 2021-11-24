import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ActivityListState } from "../reducers/activities.reducer";
export const getActivityState = createFeatureSelector<ActivityListState>('activityReducer');
export const getActivity = createSelector(
    getActivityState,
    (state:ActivityListState) => state.activityList
);  