// 1 - Importaciones
import { Action, createAction, props } from '@ngrx/store'
import { Activity } from 'src/app/features/models/Activity';





//export const add_activity2      = createAction('[From Activity] Add Activity' );
export const add_activity      = createAction('[From Activity] Add Activity', props );
export const removeActivity = createAction('[From Activity] Remove Activity', props<Activity>());




/*
export const ADD_ACTIVITY = 'Add activity';
export const REMOVE_ACTIVITY = 'Remove activity';
export const GET_ACTIVITIES = 'Get activities';

export class AddActivity implements Action {
  readonly type = ADD_ACTIVITY
  constructor(public payload: Activity) { }
}


export class RemoveActivity implements Action {
  readonly type = REMOVE_ACTIVITY
  constructor(public payload: string) { }
}


export class GetActivities implements Action {
  readonly type = GET_ACTIVITIES
  constructor() { }
}


// 4 - Exportación de la acción
export type ActionsActivities = AddActivity;RemoveActivity;GetActivities;



/*import { createAction, props } from '@ngrx/store';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';

//Recuperar activities de la api

//Aqui solo se crea una accion llamada [Activity API] Activity API Success, que ejecutara un metodo que
//recuperara los datos de la api y los guardara en el store
// llamado allActivities


export const retrievedActivityList = createAction(
    '[Activity API] Activity API Success',
    props<{ allActivities: Activity[] }>()
  );
  
  export const invokeActivityAPI = createAction('[Activity API] Invoke API');*/