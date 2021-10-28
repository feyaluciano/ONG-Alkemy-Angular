import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImgCarouselPipe } from './pipes/img-carousel.pipe';
import { MsgErrorFormDirective } from './directives/msg-error-form.directive';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';



@NgModule({
  declarations: [
    ContactFormComponent,
    CarouselComponent,
    ImgCarouselPipe,
    MsgErrorFormDirective,
    CkeditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CKEditorModule   
  ],
  exports: [
    CarouselComponent,
    ImgCarouselPipe,
    ContactFormComponent,
    MsgErrorFormDirective,
    // CKEditorModule,
    CkeditorComponent
  ]
})
export class SharedModule { }
