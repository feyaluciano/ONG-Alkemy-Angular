import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './pages/auth/register-form/register-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
const routes:Routes=[      
  {path : '' , redirectTo : '/backoffice/dashboard' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'dashboard', component: DashboardComponent ,data : {origin : 'home'}},               
    ]   
  },
  {
    path:'',
    children: [      
      { path: 'register', component: RegisterFormComponent ,data : {origin : 'home'}},               
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [DashboardComponent]
})
export class BackofficeRoutingModule { }
