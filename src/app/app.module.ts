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
import { slideReducer } from './core/redux/reducers/slides.reducer';
import { SlideEffects } from './core/redux/effects/slide.effects';





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
    StoreModule.forRoot({ authReducer: authReducer,userReducer: userReducer,slideReducer: slideReducer }),    
    EffectsModule.forRoot([AuthEffects,UserEffects,SlideEffects]),
    
    
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
