import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

 
@NgModule({
  declarations: [],
  exports: [
    RouterModule,
    AppRoutingModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    
    
    
  ],
})
export class FeaturesModule {}
