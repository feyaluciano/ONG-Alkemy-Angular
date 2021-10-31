import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from './pages/auth/register-form/register-form.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './views/activities/detail/detail.component';


const routes:Routes=[      
  {path : '' , redirectTo : '/home' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'home', component: HomeComponent,data : {origin : 'home'} },
      {
        path:'',
        children: [      
          { path: 'register', component: RegisterFormComponent ,data : {origin : 'home'}},
          { path : 'login' , component:LoginFormComponent},
          { path: 'nosotros', component: AboutComponent } ,
          { path: 'actividades/:id', component: DetailComponent }             
        ]   
      }               
    ]   
  }
 
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }