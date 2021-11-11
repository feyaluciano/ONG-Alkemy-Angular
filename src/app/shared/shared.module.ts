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
import { CardComponent } from './card/card.component';
import { ProgressComponent } from './progress/progress.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    ContactFormComponent,
    CarouselComponent,
    ImgCarouselPipe,
    MsgErrorFormDirective,
    CkeditorComponent,
    HtmlPipe,
    FormComponent,
    CardComponent,
    ProgressComponent,
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CarouselComponent,
    ImgCarouselPipe,
    ContactFormComponent,
    MsgErrorFormDirective,
    CkeditorComponent,
    HtmlPipe,
    FormComponent,CardComponent,
    ProgressComponent
  ]
})
export class SharedModule { }
