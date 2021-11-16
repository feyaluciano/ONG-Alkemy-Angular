import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './core/redux/reducers/authReducer.reducer';
import { AuthEffects } from './core/redux/effects/auth.effects';
import { UserEffects } from './core/redux/effects/user.effect';
import { MaterialModule } from './features/material/material.module';
import { userReducer } from './core/redux/reducers/userReducer.reducer';





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
    StoreModule.forRoot({ authReducer: authReducer }),
    StoreModule.forRoot({ userReducer: userReducer }),
    EffectsModule.forRoot([AuthEffects]),
    EffectsModule.forRoot([UserEffects])
    
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
