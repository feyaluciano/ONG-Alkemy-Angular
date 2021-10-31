import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../public/pages/home/home.component';
import { AppBackofficeComponent } from './app-backoffice.component';
import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BackofficeHomeComponent } from './pages/backoffice-home/backoffice-home.component';
import { MemberFormComponent } from './pages/member-form/member-form.component';
import { SlideComponent } from './pages/slide/slide.component';


const routes: Routes = [
  {
    path: '',
    component: AppBackofficeComponent,
    children: [         
      { path: 'dashboard', component: DashboardComponent   },
      { path: 'activity', component: ActivityFormComponent },
      { path: 'activity/:idActivity', component: ActivityFormComponent },
      { path: 'slide', component: SlideComponent },
      { path: 'slide/:id', component: SlideComponent },
      { path: 'categories', component: CategoriesFormComponent } ,
      { path: 'member', component: MemberFormComponent },
      { path: 'member/edit/:idMember', component: MemberFormComponent}
    ]
    }
]




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class BackofficeRoutingModule { }
