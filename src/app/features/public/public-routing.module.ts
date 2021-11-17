import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPublicComponent } from './app-public.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivityComponent } from './pages/activities/activity/activity.component';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from './pages/auth/register-form/register-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MembersComponent } from './pages/members/members.component';
import { NewsFormComponent } from './pages/news/news-form/news-form.component';
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
      },
          { path: 'register', component: RegisterFormComponent },
          { path : 'login' , component:LoginFormComponent},
          { path: 'nosotros', component: MembersComponent } ,
          { path: 'contacto', component: ContactComponent },
          { path: 'actividades', component: ActivitiesComponent },
          { path: 'actividad/:id', component: ActivityComponent },
          { path: 'novedades', component: NewsFormComponent },
          { path: 'testimonios', component: TestimonialFormComponent }
    ]
    }
]

                     
        

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }