import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes:Routes=[      
  {path : '' , redirectTo : '/backoffice/dashboard' , pathMatch : 'full'},
  {
    path:'',
    children: [      
      { path: 'dashboard', component: DashboardComponent },               
    ]   
  },
  {
    path:'',
    children: [      
      { path: 'activity', component: ActivityFormComponent },
      { path: 'activity/:idActivity', component: ActivityFormComponent },
      { path: 'category', component: CategoriesFormComponent },
      { path: 'category/:id', component: CategoriesFormComponent }             
    ]   
  },
  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class BackofficeRoutingModule { }
