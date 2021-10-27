import { Pipe, PipeTransform } from '@angular/core';
import { Datum } from '../../core/interfaces/httpResponse.interface';

@Pipe({
  name: 'imgCarousel'
})
export class ImgCarouselPipe implements PipeTransform {

  transform( data: Datum ): string {

    if( data.image == null ){
      return 'assets/no-image.jpg';
    } else {
      return data.image;
    }

    
  }

}
