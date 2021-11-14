import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Activity } from 'src/app/features/models/Activity';
import { ActivityState, featureKey,adapter } from './activity.state';

import { AppState } from './app.state';

//Un selector es una funcion obtiene del state, algun dato que necesitemos.
//Este archivo es el que se encarga de obtener los datos del state, permitiendo hacer filtros, ordenamientos, etc.
//El archivo debe exportar una funcion que recibe el state como parametro y retorna una propiedad del state, en este caso por ejemplo
//activities. 

export const activitySelector =(state: ActivityState) => state.actividades;

  const {
    selectEntities,
    selectAll
  } = adapter.getSelectors();

  const getActivityState = createFeatureSelector<ActivityState>(featureKey);
  export const selectAllActivities = createSelector(getActivityState, selectAll);

 
  

