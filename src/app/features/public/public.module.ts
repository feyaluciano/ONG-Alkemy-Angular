import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [  
    HomeComponent, 
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,

  ],
  exports: [HeaderComponent, FooterComponent]
})
export class PublicModule { }
