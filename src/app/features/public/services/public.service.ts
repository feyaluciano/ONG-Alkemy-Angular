import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(
    private httpService: HttpService
  ) { }
  
  createEntity<T>(url: string, entity: any): Observable<T> {
    return this.httpService.post(url, entity, false);
  }

}
