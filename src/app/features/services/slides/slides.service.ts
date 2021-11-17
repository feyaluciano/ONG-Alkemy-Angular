import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { HTTPResponse } from '../../models/HTTPResponse';
import { Slide } from '../../public/models/slide';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  constructor(
    private backOfficeSvc: PrivateBackofficeService
  ) { }

  getSlides(): Observable<HTTPResponse<Slide>> {
    return this.backOfficeSvc.getEntities(environment.slidesApiUrl);
  }

  deleteSlide(params: string): Observable<HTTPResponse<Slide>> {
    return this.backOfficeSvc.deleteEntity(params);
  }
}
