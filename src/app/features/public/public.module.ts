import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PublicRoutingModule } from "./public-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { BackofficeRoutingModule } from "../backoffice/backoffice-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { TitlesComponentComponent } from './components/titles-component/titles-component.component';
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [HomeComponent,RegisterFormComponent, TitlesComponentComponent, LoginFormComponent, AboutComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    BackofficeRoutingModule,
  ],
  exports: [HomeComponent,RegisterFormComponent, TitlesComponentComponent],
})
export class PublicModule {}
