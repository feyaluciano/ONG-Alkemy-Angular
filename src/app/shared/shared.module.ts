import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImgCarouselPipe } from './pipes/img-carousel.pipe';
import { MsgErrorFormDirective } from './directives/msg-error-form.directive';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';
import { HtmlPipe } from './pipes/html/html.pipe';
import { FormComponent } from './components/form-news/form.component';
import { StandarDialogComponent } from './components/standar-dialog/standar-dialog.component';
import { MaterialModule } from '../features/material/material.module';




@NgModule({
  declarations: [
    ContactFormComponent,
    CarouselComponent,
    ImgCarouselPipe,
    MsgErrorFormDirective,
    CkeditorComponent,
    HtmlPipe,
    FormComponent,
    StandarDialogComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,  
    MaterialModule     
  ],
  exports: [
    CarouselComponent,
    ImgCarouselPipe,
    ContactFormComponent,
    MsgErrorFormDirective,
    CkeditorComponent,
    HtmlPipe,
    FormComponent,     
    StandarDialogComponent,
    MaterialModule       
  ]
})
export class SharedModule { }
