import { createAction, props } from '@ngrx/store';
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
  
  export const invokeActivityAPI = createAction('[Activity API] Invoke API');