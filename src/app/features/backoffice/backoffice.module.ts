import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ],
  exports: []

})
export class BackofficeModule { }
