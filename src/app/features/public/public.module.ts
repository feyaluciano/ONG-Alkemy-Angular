import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { BackofficeRoutingModule } from "../backoffice/backoffice-routing.module";
import { AppPublicComponent } from "./app-public.component";
import { ActivityComponent } from './components/activity/activity.component';
import { HeaderPublicComponent } from "./components/header-public/header-public.component";
import { TitlesComponentComponent } from './components/titles-component/titles-component.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { LoginFormComponent } from "./pages/auth/login-form/login-form.component";
import { RegisterFormComponent } from "./pages/auth/register-form/register-form.component";
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from "./pages/home/home.component";
import { NewsFormComponent } from "./pages/news/news-form/news-form.component";
import { TestimonialFormComponent } from "./pages/testimonials/testimonial-form/testimonial-form.component";
import { PublicRoutingModule } from "./public-routing.module";
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
    AboutComponent, 
    DetailComponent, 
    ActivityComponent, 
    ContactComponent, 
    ActivitiesComponent,
    NewsFormComponent,
    TestimonialFormComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    BackofficeRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    HomeComponent,
    RegisterFormComponent, 
    TitlesComponentComponent,
    AboutComponent
  ],
})
export class PublicModule {}
