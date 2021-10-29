import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MemberFormComponent } from './pages/member-form/member-form.component';

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
      { path: 'categories', component: CategoriesFormComponent } ,
      { path: 'member', component: MemberFormComponent },
      { path: 'member/edit/:idMember', component: MemberFormComponent }               
    ]   
  },
  
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class BackofficeRoutingModule { }
