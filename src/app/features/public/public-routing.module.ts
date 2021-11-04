import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from './pages/auth/register-form/register-form.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AppPublicComponent } from './app-public.component';
import { DetailComponent } from './views/activities/detail/detail.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ActivitiesComponent } from './pages/activities/activities.component';


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
          { path: 'actividades', component: ActivitiesComponent }        
    ]
    }
]

                     
        

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }