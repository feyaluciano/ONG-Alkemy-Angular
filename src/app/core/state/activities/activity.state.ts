//ESTE ES MI STATE,esta es su interface, voy a tener un array de actividades, el id de la actividad seleccionada, si estoy cargando etc

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Activity } from 'src/app/features/models/Activity';
import { HTTPResponse } from 'src/app/features/models/HTTPResponse';

export const adapter = createEntityAdapter<HTTPResponse<Activity>>({
  selectId: (sensor: HTTPResponse<Activity>) => sensor.data.id!,
  sortComparer: false
});

export interface ActivityState extends EntityState<Activity> {
  actividades?:HTTPResponse<Activity[]> | null;
  selectedId: string | null;
  action: string | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialstate: ActivityState = adapter.getInitialState({
  succes:true,
  message:'aaa',
  actividades:,
  
  
  selectedId: null,
  action: null,
  loading: false,
  loaded: false,
  error: null
});

export const featureKey = 'Activities';

/* //   {
  //   id: "2",
  //   name: "22222la actividad 1",
  //   description: "2222la descrtppp",
  // } */

  /**
   * 
   * success: boolean;
    data:    T;
    message: string;
   * //