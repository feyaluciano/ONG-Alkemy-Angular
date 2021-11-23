import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { AppPublicComponent } from './app-public.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivityComponent } from './pages/activities/activity/activity.component';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from './pages/auth/register-form/register-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonationErrorComponent } from './pages/donations/components/donation-error/donation-error.component';
import { DonationComponent } from './pages/donations/components/donation/donation.component';
import { ThanksComponent } from './pages/donations/components/thanks/thanks.component';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { NewsFormComponent } from './pages/news/news-form/news-form.component';
import { SchoolCampaignComponent } from './pages/school-campaign/school-campaign.component';
import { TestimonialFormComponent } from './pages/testimonials/testimonial-form/testimonial-form.component';


const routes: Routes = [
  {
    path: '',
    component: AppPublicComponent,
    children: [  
      {path:'',redirectTo:"home"},       
      {
        path: 'home',
        component: HomeComponent,
        data: {animation: 'Home'}         
      },
          { path: 'register', component: RegisterFormComponent,canActivate: [AuthGuard], data: { animation: 'Register' } },
          { path : 'login' , component:LoginFormComponent, data: { animation: 'Login' }},
          { path: 'nosotros', component: MembersComponent, data: { animation: 'Nosotros' } } ,
          { path: 'contacto', component: ContactComponent, data: { animation: 'Contacto' } },
          { path: 'actividades', component: ActivitiesComponent, data: { animation: 'Actividades' } },
          { path: 'actividad/:id', component: ActivityComponent, data: { animation: 'Actividad' } },
          { path: 'novedades', component: NewsFormComponent, data: { animation: 'Novedades' } },
          { path: 'testimonios', component: TestimonialFormComponent, data: { animation: 'Testimonios' } },
          { path: 'donar', component: DonationComponent, data: { animation: 'Donar' } },
          { path: 'donar/error', component: DonationErrorComponent, data: { animation: 'DonarError' } },
          { path: 'gracias', component: ThanksComponent, data: { animation: 'Gracias' } },

          { path: 'escolar', component: SchoolCampaignComponent, data: {animation: 'Escolar'} }

    ]
    }
]

                     
        

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }