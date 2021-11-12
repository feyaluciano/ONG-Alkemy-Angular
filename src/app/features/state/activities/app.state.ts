import { Activity } from "../../models/Activity";
import { HTTPResponse } from "../../models/HTTPResponse";


//Aca se guardan las actividades, y todo lo que se quiere almacenar de nuestra app, todo lo
//que se quiere tener una fuente unica, en este caso, quiero manejar las actividades.

export interface AppState {
  activities: Activity[];
}
//https://github.com/Naveen512/Ngrx-V12-Angular-Sample/blob/master/src/app/store/app.state.ts