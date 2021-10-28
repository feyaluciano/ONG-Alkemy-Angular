import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './pages/auth/login-form/login-form.component';
import { RegisterFormComponent } from './pages/auth/register-form/register-form.component';
import { HomeComponent } from './pages/home/home.component';


const routes:Routes=[      
  {path : '' , redirectTo : '/home' , pathMatch : 'full'},
  {path : 'login' , component:LoginFormComponent},
  {
    path:'',
    children: [      
      { path: 'home', component: HomeComponent,data : {origin : 'home'} },
      {
        path:'',
        children: [      
          { path: 'register', component: RegisterFormComponent ,data : {origin : 'home'}},               
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