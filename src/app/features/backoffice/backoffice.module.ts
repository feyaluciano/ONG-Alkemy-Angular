import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivityFormComponent } from './pages/activity-form/activity-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { HomeComponent } from '../public/pages/home/home.component';

@NgModule({
  declarations: [ActivityFormComponent],
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
