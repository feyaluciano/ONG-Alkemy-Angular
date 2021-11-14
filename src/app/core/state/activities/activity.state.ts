//ESTE ES MI STATE,esta es su interface, voy a tener un array de actividades, el id de la actividad seleccionada, si estoy cargando etc

import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Activity } from 'src/app/features/models/Activity';

export const adapter = createEntityAdapter<Activity>({
  selectId: (sensor: Activity) => sensor.id!,
  sortComparer: false
});

export interface ActivityState extends EntityState<Activity> {
  actividades:Activity[] ;
  selectedId: string | null;
  action: string | null;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialstate: ActivityState = adapter.getInitialState({
  actividades:[
    {
    id: "2",
    name: "22222la actividad 1",
    description: "2222la descrtppp",
  }
],
  selectedId: null,
  action: null,
  loading: false,
  loaded: false,
  error: null
});

export const featureKey = 'Activities';