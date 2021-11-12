

import { createReducer, on } from '@ngrx/store';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';
import { retrievedActivityList } from './activities.actions';

export const initialState: ReadonlyArray<Activity> = [];


const _activityReducer = createReducer(
    initialState,
    on(retrievedActivityList, (state, { allActivities }) => {
      return [...allActivities];
    })
  );

  export function activityReducer(state: any, action: any) {
    return _activityReducer(state, action);
  }
