import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BackofficeHomeComponent } from './pages/backoffice-home/backoffice-home.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { SlideComponent } from './pages/slide/slide.component';
import { MemberFormComponent } from './pages/member-form/member-form.component';

@NgModule({
  declarations: [
    ActivityFormComponent, 
    NavbarComponent,
    NavbarComponent,
    DashboardComponent,
    BackofficeHomeComponent,
    CategoriesFormComponent,
    SlideComponent,
    MemberFormComponent
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
