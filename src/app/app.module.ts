import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
// ngrx
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthEffects } from './core/redux/effects/auth.effects';
import { UserEffects } from './core/redux/effects/user.effect';
import { authReducer } from './core/redux/reducers/authReducer.reducer';
import { userReducer } from './core/redux/reducers/userReducer.reducer';
import { FeaturesModule } from './features/features.module';
import { MaterialModule } from './features/material/material.module';
import { SharedModule } from './shared/shared.module';
import { slideReducer } from './core/redux/reducers/slides.reducer';
import { SlideEffects } from './core/redux/effects/slide.effects';
import { activityReducer } from './core/redux/reducers/activities.reducer';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    MaterialModule,
    FeaturesModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ 
      authReducer: authReducer,
      userReducer: userReducer,
      slideReducer: slideReducer,
      activityReducer: activityReducer
    }),    
    EffectsModule.forRoot([
      AuthEffects,
      UserEffects,
      SlideEffects
    ])
    //EXPLICACION DE COMO TRABAJA REDUX
    //COMO SE VE EN LA LINEA << activityReducer: activityReducer >>
    /*
    Estoy importando el reducer de la authentication (authReducer.reducer.ts),
    Entonces la aplicacion se queda escuchando que sucede en el store, 
    ver linea 28 en authReducer.reducer.ts (on(login, state => ({...state, auth: true, user: null, token: null })))
    cuando se ejecuta la action login, realiza esa modificacion del store, pasandole el estado nuevo obtenido al ejecutar la action login
    (  ofType(login))
    Esta ejecuta dicho servicio y luego concatena con map a la action setAuthState
     map( (resp:any) => setAuthState({success: resp.success, token: resp.data.token, data: resp.data.user}))
El reducer se entera que se ejecuta esa accion (ver linea 20 de authReducer.reducer.ts)
 on(setAuthState, (state , setAuthState ) => ({
y le pasa al sotre el nuevo state que seria 
export interface AuthState {
    auth: boolean;
    user: User | null;
    token: string | null;
}









    



    y lo que hace es que cuando se ejecute el action de getActivityList,
    */ 
    
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
