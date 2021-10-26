import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { BackofficeModule } from "./backoffice/backoffice.module";
import { PublicModule } from "./public/public.module";


@NgModule({
  declarations: [],
  exports: [RouterModule,AppRoutingModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    PublicModule,
    BackofficeModule,
  ],
})
export class FeaturesModule {}
