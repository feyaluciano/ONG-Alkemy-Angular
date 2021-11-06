import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { environment } from 'src/environments/environment';


import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class PrivateBackofficeService {

  private urlApi: string = environment.apiUrl;
  
  constructor(private httpService:HttpService,private userStatusService:UserStatusService) {}

  /**
  * Search data in localStorage
  * @returns string
  */
  verifyToken():string{
    if( localStorage.getItem('user')){
      let user = JSON.parse(localStorage.getItem('user')!);

      return `Bearer ${user.token}`;
    }

    return 'Bearer $InvalidToken';
  }



 getEntityById<T>(url: string, id: string):Observable<T> {
    this.httpService.setHeaders("Authorization", this.userStatusService.getHeaders());
    return  this.httpService.get<T>(url + id,false);              
  }    

  createEntity<T>(url: string, entity: any): Observable<T> {
    
    this.httpService.setHeaders('Authorization', this.verifyToken());
    return this.httpService.post<T>(url, entity, true);
  }

  updateEntity<T>(url: string, entity: any): Observable<T> {
    this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    return this.httpService.put<T>(url, entity, false);
  }

  getEntities<T>( url:string ): Observable<T> {
    return this.httpService.get<T>(url);
  }
  

  /**
   * Receive -parameter and object<T>-
   * ex: url/users/355
   * @param params 
   * @returns Http response with the especific object deleted
   */
   deleteDataById<T>(params: string):Observable<T>{
    this.httpService.setHeaders('Authorization', this.verifyToken());
    return this.httpService.delete<T>( params, true);
  }

}
