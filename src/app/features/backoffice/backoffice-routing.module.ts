import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBackofficeComponent } from './app-backoffice.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
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
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UserslistComponent } from './pages/userslist/userslist.component';




const routes: Routes = [
  {
    path: '',
    component: AppBackofficeComponent,
    children: [         
      { path: 'dashboard', component: DashboardComponent, data: {animation: 'Dashboard'}   },
      { path: 'activity', component: ActivityFormComponent, data: {animation: 'CreateActivity'} },
      { path: 'activities', component: ActivitiesComponent, data: {animation: 'Activities'} },
      { path: 'activity/:idActivity', component: ActivityFormComponent, data: {animation: 'Activity'} },
      { path: 'slides', component: SlidesComponent, data: {animation: 'Slides'} },
      { path: 'slide', component: SlideComponent, data: {animation: 'CreateSlide'} },
      { path: 'slide/:id', component: SlideComponent, data: {animation: 'Slide'} },
      { path: 'categoria', component: CategoriesFormComponent, data: {animation: 'CrearCategoria'} },
      { path: 'categoria/:id', component: CategoriesFormComponent, data: {animation: 'Categoria'} },
      { path: 'member', component: MemberFormComponent, data: {animation: 'CrearMiembro'} },
      { path: 'member/edit/:idMember', component: MemberFormComponent, data: {animation: 'Miembro'}},
      { path: 'home', component: BackofficeHomeComponent, data: {animation: 'Home'} },
      { path: 'organization', component: OrganizationComponent, data: {animation: 'CrearOrganization'} },
      { path: 'organization/edit', component: OrganizationEditComponent, data: {animation: 'Organization'} },
      { path: 'news', component: NewsFormComponent, data: {animation: 'CrearNew'} },
      { path: 'news/:id', component: NewsFormComponent, data: {animation: 'New'}},
      { path: 'users', component: UserslistComponent, data: {animation: 'Users'} },
      { path: 'users/create', component: UserFormComponent, data: {animation: 'CreateUser'} },
      { path: 'users/:id', component: UserFormComponent, data: {animation: 'User'} }
    ]
    }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class BackofficeRoutingModule { }
