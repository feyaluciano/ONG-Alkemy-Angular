import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PublicRoutingModule } from "./public-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { BackofficeRoutingModule } from "../backoffice/backoffice-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";

@NgModule({
  declarations: [HomeComponent,RegisterFormComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    BackofficeRoutingModule,
  ],
  exports: [HomeComponent,RegisterFormComponent],
})
export class PublicModule {}
