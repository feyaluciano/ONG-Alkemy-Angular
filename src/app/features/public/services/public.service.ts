import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../../../core/services/http.service';
import { environment } from '../../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class PublicService {
   urlApi: string = environment.apiUrl;

  constructor(
    private httpService: HttpService
  ) { }
  
  createEntity<T>(url: string, entity: any): Observable<T> {
    return this.httpService.post(url, entity, false);
  }

  getEntities<T>( param: string ): Observable<T> {
    return this.httpService.get<T>(`${this.urlApi}${param}`, false);
  }

 

}
