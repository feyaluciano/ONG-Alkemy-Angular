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
    StoreModule.forRoot({ authReducer: authReducer, userReducer: userReducer }),
    EffectsModule.forRoot([AuthEffects,UserEffects])
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
