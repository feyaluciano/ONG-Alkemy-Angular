import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { HTTPResponse } from '../../models/HTTPResponse';
import { Slide } from '../../public/models/slide';

@Injectable({
  providedIn: 'root'
})
export class SlidesService {

  constructor(
    private backOfficeSvc: PrivateBackofficeService
  ) { }

  getSlides(url: string): Observable<HTTPResponse<Slide>> {
    return this.backOfficeSvc.getEntities(url);
  }
}
