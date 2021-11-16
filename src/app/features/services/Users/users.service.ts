import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { HTTPResponse } from '../../models/HTTPResponse';
import { User } from '../../models/User';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlApi: string = environment.apiUrl;
  private _params: string = '/users';

  constructor( private privateBackofficeService: PrivateBackofficeService ) { }

  /**
   * Get a listing of the Users
   * @returns User[]
   */
  getAllUsers():Observable<HTTPResponse<User[]>>{
    return this.privateBackofficeService.getEntities(`${this.urlApi}${this._params}`);
  }
  
  /**
   * Display the specified User
   * @param id 
   * @returns User
   */
  getUserById(id:string):Observable<HTTPResponse<User>>{  
    return this.privateBackofficeService.getEntityById(environment.usersApiUrl, id);
    
  }
  /**
  * Create a new user
  * @param user 
  * @returns user
  */
  createUser(user: User): Observable<HTTPResponse<User>> {
    return this.privateBackofficeService.createEntity(environment.usersApiUrl, user);
  }

  
   /**
   * Update the specified User in storage
   * @param id 
   * @param user 
   * @returns updated User
   */
  updateUserById(id: number, user: User): Observable<HTTPResponse<User>> {
    return this.privateBackofficeService.updateEntity(`${ this._params }/${id}`, user);
  }

  /**
   * Remove the specified User from storage
   * @param id 
   * @returns Http response with the object deleted
   */ 
   deleteUserById(id: number | undefined):Observable<HTTPResponse<User>>{
    return this.privateBackofficeService.deleteEntity(`${environment.usersApiUrl}/${id}`);
  }
  
}
