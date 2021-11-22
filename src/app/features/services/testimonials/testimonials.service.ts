import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { HTTPResponse } from '../../models/HTTPResponse';
import { Testimonial } from '../../models/testimonial.model';


@Injectable({
  providedIn: 'root'
})
export class TestimonialsService {

  constructor(
    private backOfficeSvc: PrivateBackofficeService
  ) { }

  getTestimonials(url: string): Observable<HTTPResponse<Testimonial>> {
    return this.backOfficeSvc.getEntities(url);
  }
}
