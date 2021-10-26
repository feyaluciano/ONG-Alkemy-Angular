import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/backoffice/dashboard' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'dashboard', component: DashboardComponent },               
    ]   
  }  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
