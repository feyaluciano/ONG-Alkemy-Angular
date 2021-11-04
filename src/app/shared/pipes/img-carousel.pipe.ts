import { Pipe, PipeTransform } from '@angular/core';
import { Carousel } from '../../features/public/models/carousel.interface';

@Pipe({
  name: 'imgCarousel'
})
export class ImgCarouselPipe implements PipeTransform {

  transform( data: Carousel ): string {

    if( data.image == null ){
      return 'assets/no-image.jpg';
    } else {
      return data.image;
    }

    
  }

}
