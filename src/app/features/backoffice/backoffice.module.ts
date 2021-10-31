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
import { AppBackofficeComponent } from './app-backoffice.component';
import { HeaderBackofficeComponent } from './components/header-backoffice/header-backoffice.component';


@NgModule({
  declarations: [
    ActivityFormComponent,
    NavbarComponent,
    DashboardComponent,
    CategoriesFormComponent,
    MemberFormComponent,
    AppBackofficeComponent,
    HeaderBackofficeComponent,
    SlideComponent,
    MemberFormComponent
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [HeaderBackofficeComponent],

 })
export class BackofficeModule { }
