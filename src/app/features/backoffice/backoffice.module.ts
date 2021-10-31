import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { SlideComponent } from './pages/slide/slide.component';
import { MemberFormComponent } from './pages/member-form/member-form.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { EditComponent } from './pages/organization/edit/edit.component';

@NgModule({
  declarations: [
    ActivityFormComponent,
    NavbarComponent,
    DashboardComponent,
    CategoriesFormComponent,
    SlideComponent,
    MemberFormComponent,
    OrganizationComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BackofficeRoutingModule,
    SharedModule
  ],
  exports: [],

 })
export class BackofficeModule { }
