import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { environment } from 'src/environments/environment';


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
    return  this.httpService.get<T>(url + id);              
  }    



  //methods private
  createEntity<T>(params:string, entity: any): Observable<T> {
    
    this.setHeaders();
    return this.httpService.post<T>(`${environment.apiUrl}${params}`, entity, false);
  }

  updateEntity<T>(params: string, entity: any): Observable<T> {
    this.setHeaders();
    return this.httpService.put<T>(`${environment.apiUrl}${params}`, entity, false);
  }     

   deleteEntity<T>(params: string):Observable<T>{
    this.setHeaders();
    return this.httpService.delete<T>(`${environment.apiUrl}${params}`, true);
  }
     

  


}

