import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MaterialModule } from '../features/material/material.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CkeditorComponent } from './components/ckeditor/ckeditor.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormComponent } from './components/form-news/form.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StandarDialogComponent } from './components/standar-dialog/standar-dialog.component';
import { MsgErrorFormDirective } from './directives/msg-error-form.directive';
import { HtmlPipe } from './pipes/html/html.pipe';
import { ImgCarouselPipe } from './pipes/img-carousel.pipe';
import { CardComponent } from './card/card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressComponent } from './components/progress/progress.component';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LeafletMapComponent } from '../features/public/components/leaflet-map/leaflet-map.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';






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
    SpinnerComponent,
    CardComponent,
    ProgressComponent,
    SkeletonComponent,
    LeafletMapComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CKEditorModule,
    FormsModule,  
    MaterialModule,
    MatProgressBarModule,
    NgxSkeletonLoaderModule,
    PdfViewerModule 
    
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
    MaterialModule,
    SpinnerComponent,
    ProgressComponent,
    CardComponent,
    SkeletonComponent,
    LeafletMapComponent,  
  ]
})
export class SharedModule { }
