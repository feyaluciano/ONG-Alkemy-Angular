import { Injectable } from '@angular/core';
import { Observable, Observer, of, Subscriber } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
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
   * Return false if localStorage('data')
   * don't exist.
   * Otherwise, modify the headers and return true.
   * @returns True
   */
  verifyToken(){

    if( localStorage.getItem('user') ){

      let user = JSON.parse( localStorage.getItem('user')! );
      this.httpService.setHeaders('Authorization',`Bearer ${user.token}`);
      
      return;
    } 

      return;
  }

  


 getActivityById(url: string, id: string):Observable<HTTPResponse<Activity>> {
    this.httpService.setHeaders("Authorization", this.userStatusService.getHeaders());
    return  this.httpService.get(url + id,false);              
  }    

  createEntity<T>(url: string, entity: any): Observable<T> {
    //this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    this.httpService.setHeaders('Authorization', "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9vbmdhcGkuYWxrZW15Lm9yZ1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzNjA5ODA4MiwiZXhwIjoxNjM2MTAxNjgyLCJuYmYiOjE2MzYwOTgwODIsImp0aSI6ImRTS05RTkdZVmlHTklYZmMiLCJzdWIiOjc0NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.gbafTfG06zu-QroOJQZDROTPQ4_KXvuAFYe9R57iEsQ");   
    
    return this.httpService.post<T>(url, entity, true);
  }
  

  

  /**
   * Receive -parameter and object<T>-
   * ex: /users/355   updateUser: User = {...}
   * @param params 
   * @param user 
   * @returns Http response with the object updated
   */
   updateData<T>( params: string, user: User):Observable<T> {

    //this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    this.httpService.getHeaders().append('Authorization','Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9vbmdhcGkuYWxrZW15Lm9yZ1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzNjA3NzU2OSwiZXhwIjoxNjM2MDgxMTY5LCJuYmYiOjE2MzYwNzc1NjksImp0aSI6InhlYmRVOFk3TlpkYkFGd2kiLCJzdWIiOjc0NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.W5uWYaQAoZqwfG_e2LSkMRyAqGzpeGwnCL7HfwW6RbI');
    return  this.httpService.put<T>(`${this.urlApi}/${ params }`, user, true);
    
  }

  /**
   * Receive -parameter and object<T>-
   * ex: url/users/355
   * @param params 
   * @returns Http response with the especific object deleted
   */
   deleteDataById<T>( params: string):Observable<T>{
    this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    return this.httpService.delete<T>( params, true);
  }

}
