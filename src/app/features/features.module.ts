import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule} from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects";
import { ActivityEffect } from "../core/state/activities/activities.effects";
import { reducer } from "../core/state/activities/activities.reducer";
import { featureKey } from "../core/state/activities/activity.state";
//import { activityReducer } from "../core/state/activities/activities.reducer";
 
@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    AppRoutingModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forFeature(featureKey,reducer),
    EffectsModule.forFeature([ActivityEffect]),
    
    
    
  ],
})
export class FeaturesModule {}
