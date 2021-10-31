import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PublicRoutingModule } from "./public-routing.module";
import { BackofficeRoutingModule } from "../backoffice/backoffice-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { TitlesComponentComponent } from './components/titles-component/titles-component.component';
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { AboutComponent } from './pages/about/about.component';
import { SharedModule } from "src/app/shared/shared.module";
import { HomeComponent } from "./pages/home/home.component";
import { HeaderPublicComponent } from "./components/header-public/header-public.component";
import { AppPublicComponent } from "./app-public.component";
import { DetailComponent } from './views/activities/detail/detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    RegisterFormComponent, 
    TitlesComponentComponent, 
    LoginFormComponent, 
    AboutComponent,
    AppPublicComponent,
    HeaderPublicComponent,
    AboutComponent, DetailComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    BackofficeRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    RegisterFormComponent, 
    TitlesComponentComponent,
    AboutComponent],
})
export class PublicModule {}
