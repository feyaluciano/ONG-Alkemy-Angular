import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPublicComponent } from './app-public.component';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from './pages/auth/register-form/register-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsFormComponent } from './pages/news/news-form/news-form.component';
import { TestimonialFormComponent } from './pages/testimonials/testimonial-form/testimonial-form.component';
import { DetailComponent } from './views/activities/detail/detail.component';


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
          { path: 'nosotros', component: AboutComponent } ,
          { path: 'nosotros', component: AboutComponent } ,
          { path: 'actividades/:id', component: DetailComponent },
          { path: 'contacto', component: ContactComponent },
          { path: 'actividades', component: ActivitiesComponent },
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