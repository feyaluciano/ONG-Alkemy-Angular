import { Action, createReducer, on } from "@ngrx/store";
import * as activityState from "./activity.state";
//IMPORTO TODAS LAS ACCIONES QUE VOY A USAR
import * as activityActions from "./activities.actions";

const activityReducer = createReducer(
  activityState.initialstate,

  //La action findAllActivities ya tiene asociada un efect (ver archivo effects)
  //Se ejecuta entonces el efects asociado y cambia el estado diciendo que
  // loading true: ya que se esta realizando la peticion a la apiUrl
  //error null
  //action activityActions.type.FIND_ALL_ACTIVITIES: ya que mi state guarda la action que se ejecutó por ultima vez
  on(activityActions.findAllActivities, (state) => ({
    ...state,
    action: activityActions.type.FIND_ALL_ACTIVITIES,
    loading: true,
    error: null,
  })),
  //Ver Efect findAllActivities$
  //Cuando se ejecuta la peticion a la api se hace un switchMap que genera otro observable a partir del observable que le ingresa
  //En este caso le ingresa el observable que se genera  efect findAllActivities$, que como dato de entrada tiene las actividades traidas de la api
  //Entonces si los datos llegan succes se ejecuta este reducer que con los datos de la api los guarda en el state clonado, entonces
  //ahroa tenemos un estado nuevo
  //¿INVESTIGAR COMO FUNCIONA Y PARA QUE SON LOS METODOS DEL ADAPTER addMany y como se podria hacer
  //una copia del estado y agregar los nuevos datos sin usar este adapter
  on(activityActions.findAllActivitiesSuccess, (state, { payloadActivity }) => {
    return activityState.adapter.addMany(payloadActivity, {
      ...state,
      loading: false,
      actividades: payloadActivity,
    });
  }),
  on(activityActions.findAllActivitiesError, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  })),

  //CREATE
  on(activityActions.createActivity, (state) => ({
    ...state,
    action: activityActions.type.CREATE_ACTIVITY,
    loading: true,
    error: null,
  })),

  on(activityActions.createActivitySuccess, (state, { payloadActivity }) => {
    return activityState.adapter.addOne(payloadActivity, {
      ...state,
      loading: false,
    });
  }),
  on(activityActions.createActivityError, (state, { error }) => ({
    ...state,
    error: { ...error },
    loading: false,
  }))
);

export function reducer(state: activityState.ActivityState, action: Action) {
  return activityReducer(state, action);
}
