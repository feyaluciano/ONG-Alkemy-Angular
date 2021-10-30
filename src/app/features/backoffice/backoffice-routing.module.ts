import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
<<<<<<< HEAD

=======
import { BackofficeHomeComponent } from './pages/backoffice-home/backoffice-home.component';
>>>>>>> OT97-32/feature-form-edit-home
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
      { path: 'activity/:idActivity', component: ActivityFormComponent },
      { path: 'categories', component: CategoriesFormComponent }               
    ]   
  },
  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class BackofficeRoutingModule { }
