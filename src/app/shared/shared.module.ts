import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarouselComponent } from './carousel/carousel.component';
import { ImgCarouselPipe } from './pipes/img-carousel.pipe';
import { MsgErrorFormDirective } from './directives/msg-error-form.directive';



@NgModule({
  declarations: [
<<<<<<< HEAD
    ContactFormComponent,MsgErrorFormDirective
=======
    ContactFormComponent,
    CarouselComponent,
    ImgCarouselPipe
>>>>>>> main
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,    
  ],
  exports: [
<<<<<<< HEAD
    CarouselComponent,MsgErrorFormDirective
=======
    CarouselComponent,
    ImgCarouselPipe,
    ContactFormComponent
>>>>>>> main
  ]
})
export class SharedModule { }
