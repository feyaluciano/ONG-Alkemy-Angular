import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBackofficeComponent } from './app-backoffice.component';
import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { BackofficeHomeComponent } from './pages/backoffice-home/backoffice-home.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MemberFormComponent } from './pages/member-form/member-form.component';
import { NewsFormComponent } from './pages/news/news-form/news-form.component';
import { OrganizationEditComponent } from './pages/organization-edit/organization-edit.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { SlideComponent } from './pages/slide/slide.component';
import { SlidesComponent } from './pages/slides/slides.component';
import { UserslistComponent } from './pages/userslist/userslist.component';




const routes: Routes = [
  {
    path: '',
    component: AppBackofficeComponent,
    children: [         
      { path: 'dashboard', component: DashboardComponent   },
      { path: 'activity', component: ActivityFormComponent },
      { path: 'activity/:idActivity', component: ActivityFormComponent },
      { path: 'slides', component: SlidesComponent },
      { path: 'slide', component: SlideComponent },
      { path: 'slide/:id', component: SlideComponent },
      { path: 'categoria', component: CategoriesFormComponent },
      { path: 'categoria/:id', component: CategoriesFormComponent },
      { path: 'member', component: MemberFormComponent },
      { path: 'member/edit/:idMember', component: MemberFormComponent},
      { path: 'home', component: BackofficeHomeComponent },
      { path: 'organization', component: OrganizationComponent },
      { path: 'organization/edit', component: OrganizationEditComponent },
      { path: 'news', component: NewsFormComponent },
      { path: 'news/:id', component: NewsFormComponent},
      { path: 'users', component: UserslistComponent }
    ]
    }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class BackofficeRoutingModule { }
