import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { StoreModule} from "@ngrx/store"
import { EffectsModule } from '@ngrx/effects';
import { featureKey } from './core/state/activities/activity.state';
import { reducer } from './core/state/activities/activities.reducer';
import { ActivityEffect } from './core/state/activities/activities.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
// StoreModule.forFeature(featureKey,reducer),
//     EffectsModule.forFeature([ActivityEffect]),
    
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
