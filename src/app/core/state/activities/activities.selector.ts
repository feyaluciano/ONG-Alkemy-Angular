import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Activity } from 'src/app/features/models/Activity';
import { ActivityState, featureKey,adapter } from './activity.state';

//import { AppState } from './app.state';

//Un selector es una funcion obtiene del state, algun dato que necesitemos.
//Este archivo es el que se encarga de obtener los datos del state, permitiendo hacer filtros, ordenamientos, etc.
//El archivo debe exportar una funcion que recibe el state como parametro y retorna una propiedad del state, en este caso por ejemplo
//activities. 


//¿QUE HACEN ESTOS DOS SELECTORES QUE YA ESTAN DESARROLLADOS Y SE IMPORTAN DE Adapater
// ¿QUE FUNCION CUMPLE EL ADAPTER (createEntityAdapter)? COMO SE PODRIA OBTENER LOS DATOS  SIN ESTE ADAPTER?

const {
  selectEntities,
  selectAll
} = adapter.getSelectors();


//FeautureKey es el nombre que se le asocio al reducer de actividades cuando cargue el modulo
// StoreModule.forFeature(featureKey,reducer), en feature Module
  const getActivityState = createFeatureSelector<ActivityState>(featureKey);  
  export const selectAllActivities = createSelector(getActivityState, selectAll);

 
  

