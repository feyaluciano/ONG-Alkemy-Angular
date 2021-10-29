import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BackofficeHomeComponent } from './pages/backoffice-home/backoffice-home.component';
const routes:Routes=[      
  {path : '' , redirectTo : '/backoffice/dashboard' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: BackofficeHomeComponent },              
    ]   
  },
  {
    path:'',
    children: [      
      { path: 'activity', component: ActivityFormComponent },               
    ]   
  },
  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class BackofficeRoutingModule { }
