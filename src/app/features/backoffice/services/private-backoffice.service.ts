import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Data } from '../../models/data';
import { Observable } from 'rxjs';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { environment } from 'src/environments/environment';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';

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
    if( localStorage.getItem('userToken')){
      let userToken = JSON.parse(localStorage.getItem('userToken')!);

      return `Bearer ${userToken}`;
    }

    return 'Bearer $InvalidToken';
  }


  getEntities<T>( url:string ): Observable<T> {
    return this.httpService.get<T>(url);
  }
  

 getEntityById(url: string, id: string):Observable<HTTPResponse<Activity>> {
    this.httpService.setHeaders("Authorization", this.userStatusService.getHeaders());
    return  this.httpService.get(url + id,false);              
  }    

  createEntity<T>(url: string, entity: any): Observable<T> {
    
    this.httpService.setHeaders('Authorization', this.verifyToken());
    return this.httpService.post<T>(url, entity, true);
  }

  updateEntity<T>(url: string, entity: any): Observable<T> {
    this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    return this.httpService.put<T>(url, entity, false);
  }

   putEntity(url:string, id:string,  entity:Data, authorizacion:boolean):Observable<HTTPResponse<Activity>>{
      this.httpService.setHeaders("Authorization", this.userStatusService.getHeaders());         
      return this.httpService.put(url+'/'+id , entity, true )
     
    }
     

  

  /**
   * Receive -parameter and object<T>-
   * ex: /users/355   updateUser: User = {...}
   * @param params 
   * @param user 
   * @returns Http response with the object updated
   */
   updateData<T>( params: string, user: User):Observable<T> {
    this.httpService.setHeaders('Authorization', this.verifyToken());
    return  this.httpService.put<T>(`${this.urlApi}${ params }`, user, true);
    
  }

  /**
   * Receive -parameter and object<T>-
   * ex: url/users/355
   * @param params 
   * @returns Http response with the especific object deleted
   */
   deleteDataById<T>( params: string):Observable<T>{
    this.httpService.setHeaders('Authorization', this.verifyToken());
    return this.httpService.delete<T>( params, true);
  }

}

