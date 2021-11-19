import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "src/app/core/core.module";
import { SharedModule } from "src/app/shared/shared.module";
import { BackofficeRoutingModule } from "../backoffice/backoffice-routing.module";
import { AppPublicComponent } from "./app-public.component";
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
import { ActivityComponent } from './pages/activities/activity/activity.component';
import { DonationComponent } from "./pages/donations/components/donation/donation.component";
import { ThanksComponent } from "./pages/donations/components/thanks/thanks.component";
import { CurrencyMaskInputMode, NgxCurrencyModule } from "ngx-currency";
import { MembersComponent } from "./pages/members/members.component";
import { AgmCoreModule } from "@agm/core";


export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "$ ",
  suffix: "",
  thousands: ".",
  nullable: true,
  min: 0,
  max: 5000,
  inputMode: CurrencyMaskInputMode.FINANCIAL
};

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
    ContactComponent, 
    ActivitiesComponent,
    NewsFormComponent,
    TestimonialFormComponent,
    ActivityComponent,
    DonationComponent,
    ThanksComponent,
    MembersComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    BackofficeRoutingModule,
    SharedModule,
    CoreModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDP3Eae8DP6iN3p9jL8ipGnY4iCxm9Dga8"
    })

    
  ],
  exports: [
    HomeComponent,
    RegisterFormComponent, 
    TitlesComponentComponent,
    AboutComponent
  ],
})
export class PublicModule {}
