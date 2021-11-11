import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "src/app/shared/shared.module";

import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BackofficeHomeComponent } from './pages/backoffice-home/backoffice-home.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';

import { MemberFormComponent } from './pages/member-form/member-form.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { AppBackofficeComponent } from './app-backoffice.component';
import { HeaderBackofficeComponent } from './components/header-backoffice/header-backoffice.component';
import { SlideComponent } from './pages/slide/slide.component';

import { OrganizationEditComponent } from './pages/organization-edit/organization-edit.component';
import { NewsFormComponent } from './pages/news/news-form/news-form.component';
import { MaterialModule } from '../material/material.module';
import { UserslistComponent } from './pages/userslist/userslist.component';
import { SlidesComponent } from './pages/slides/slides.component';


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
    SlidesComponent
    
    
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
