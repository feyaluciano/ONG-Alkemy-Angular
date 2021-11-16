import { Injectable } from '@angular/core';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { User, CreateUser } from '../../models/User';
import { Observable } from 'rxjs';
import { HTTPResponse } from '../../models/HTTPResponse';
import { environment } from 'src/environments/environment';


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
    return this.privateBackofficeService.getEntityById(`${this.urlApi}${this._params}/`, id);
    
  }
  /**
  * Create a new user
  * @param user 
  * @returns user
  */
  createUser(user:CreateUser):Observable<HTTPResponse<User>>{
    return this.privateBackofficeService.createEntity(`${this.urlApi}${this._params}`, user);
  }

  
   /**
   * Update the specified User in storage
   * @param id 
   * @param user 
   * @returns updated User
   */
  updateUserById(id:number, user:CreateUser):Observable<HTTPResponse<User>>{
    return this.privateBackofficeService.updateEntity(`${ this._params }/${id}`, user);
  }

  /**
   * Remove the specified User from storage
   * @param id 
   * @returns Http response with the object deleted
   */ 
   deleteUserById(id:number):Observable<HTTPResponse<User>>{
    return this.privateBackofficeService.deleteEntity(`${this.urlApi}${this._params}/${id}`);
  }
  
}
