import { createSelector } from '@ngrx/store';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';
import { AppState } from './app.state';

//Un selector es una funcion obtiene del state, algun dato que necesitemos.
//Este archivo es el que se encarga de obtener los datos del state, permitiendo hacer filtros, ordenamientos, etc.
//El archivo debe exportar una funcion que recibe el state como parametro y retorna una propiedad del state, en este caso por ejemplo
//activities. 

export const activitySelector =(state: AppState) => state.activities;

//Recibe un listado de activities del store,Retorna una lista de actividades en el cual el name no se repite
// retona un nuevo array, ya que el estado actual del store no se repite, los ... generan un clonado del array.
export const uniqueActivityName = createSelector(
    activitySelector,
    (activities: Activity[]) => {
      return [...new Set(activities.map((_) => _.name))];
    }
  );


  //Retorna una lista de actividades en el cual el id es el que se le pasa como parametro
  export const activityById = (id:number) => createSelector(
    activitySelector,
    (activities:Activity[]) => {
        if(id == -1){
            return activities;
        }
        return activities.filter(function (act) {
              return act.id === id.toString();
        });
    }
  );

 
  export const listActivities = () => createSelector(
    activitySelector,
    (activities:Activity[]) => {
        //return activities; 
        
        return activities.map((act) => act);        
    }
  );

