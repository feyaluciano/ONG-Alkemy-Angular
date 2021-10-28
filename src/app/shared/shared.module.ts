import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { ImgCarouselPipe } from './pipes/img-carousel.pipe';



@NgModule({
  declarations: [
    ContactFormComponent,
    CarouselComponent,
    ImgCarouselPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,    
  ],
  exports: [
    CarouselComponent,
    ImgCarouselPipe,
    ContactFormComponent
  ]
})
export class SharedModule { }
