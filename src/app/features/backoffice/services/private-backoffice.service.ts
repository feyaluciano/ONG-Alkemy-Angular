import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Observable } from 'rxjs';
import { UserStatusService } from 'src/app/core/services/user-status.service';


@Injectable({
  providedIn: 'root'
})
export class PrivateBackofficeService {
  
  private header_authorization!: string;
  
  constructor(private httpService:HttpService,private userStatusService:UserStatusService) {

    this.header_authorization = this.verifyToken();

  }

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

  /**
   * Set headers
   */
  setHeaders():void{
    this.httpService.setHeaders('Authorization', this.header_authorization);
  }


  getEntities<T>( url:string ): Observable<T> {
    return this.httpService.get<T>(url);
  }
  

 getEntityById<T>(url: string, id: string):Observable<T> {
    return  this.httpService.get<T>(url + id,false);              
  }    



  //methods private
  createEntity<T>(params:string, entity: any): Observable<T> {
    
<<<<<<< HEAD
    this.httpService.setHeaders('Authorization', this.verifyToken());
    return this.httpService.post<T>(`${this.urlApi}${ params }`, entity, true);
  }

  updateEntity<T>( params: string, entity: any):Observable<T> {
    this.httpService.setHeaders('Authorization', this.verifyToken());
    return  this.httpService.put<T>(`${this.urlApi}${ params }`, entity, true);
    
  }

  deleteEntity<T>( params: string):Observable<T>{
    this.httpService.setHeaders('Authorization', this.verifyToken());
    return this.httpService.delete<T>(`${this.urlApi}${ params }`, true);
=======
    this.setHeaders();
    return this.httpService.post<T>(url, entity, true);
  }

  updateEntity<T>(url: string, entity: any): Observable<T> {
    this.setHeaders();
    return this.httpService.put<T>(url, entity, false);
  }     

  /**
   * Receive -parameter and object<T>-
   * ex: url/users/355
   * @param params 
   * @returns Http response with the especific object deleted
   */
   deleteDataById<T>(params: string):Observable<T>{
    this.setHeaders();
    return this.httpService.delete<T>( params, true);
>>>>>>> main
  }
     

  


}

