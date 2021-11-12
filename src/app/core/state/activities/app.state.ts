


//Aca se guardan las actividades, y todo lo que se quiere almacenar de nuestra app, todo lo
//que se quiere tener una fuente unica, en este caso, quiero manejar las actividades.

import { Activity } from "src/app/features/models/Activity";

export interface AppState {
  activities: Activity[];
}
//https://github.com/Naveen512/Ngrx-V12-Angular-Sample/blob/master/src/app/store/app.state.ts