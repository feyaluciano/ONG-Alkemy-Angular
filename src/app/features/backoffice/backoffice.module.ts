import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "src/app/shared/shared.module";
import { MaterialModule } from '../material/material.module';
import { AppBackofficeComponent } from './app-backoffice.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { HeaderBackofficeComponent } from './components/header-backoffice/header-backoffice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
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






@NgModule({
  declarations: [
    ActivityFormComponent, 
    NavbarComponent,
    NavbarComponent,
    DashboardComponent,
    BackofficeHomeComponent,
    CategoriesFormComponent,
    MemberFormComponent,
    AppBackofficeComponent,
    HeaderBackofficeComponent,
    SlideComponent,
    MemberFormComponent,
    OrganizationEditComponent,
    OrganizationComponent,
    NewsFormComponent,
    UserslistComponent,
    SlidesComponent,
    UserFormComponent
    
    
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule, 
    SharedModule,
    
   
  ],
  exports: [HeaderBackofficeComponent ],

 })
export class BackofficeModule { }
