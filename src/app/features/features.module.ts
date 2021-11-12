import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

import { StoreModule} from "@ngrx/store"
import { activityReducer } from "./state/activities/activities.reducer";
import { EffectsModule } from "@ngrx/effects";
import { ActivityEffect } from "./state/activities/activities.effects";
 
@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    AppRoutingModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    EffectsModule.forRoot([ActivityEffect]),
    StoreModule.forFeature("activities", activityReducer)
    
  ],
})
export class FeaturesModule {}
