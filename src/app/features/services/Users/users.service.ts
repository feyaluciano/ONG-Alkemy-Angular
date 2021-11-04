import { Injectable } from '@angular/core';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { HTTPResponse } from '../../models/HTTPResponse';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _params: string = '/users';

  constructor( private privateBackofficeService: PrivateBackofficeService ) { }

  
  /**
   * Store a newly created User in storage
   * @param user 
   * @returns new User
   */
  createUser(user:User):Observable<HTTPResponse<User>>{   
  
   return this.privateBackofficeService.createData(this._params, user);
  }
  
  /**
   * Update the specified User in storage
   * @param id 
   * @param user 
   * @returns updated User
   */
  updateUserById(id:number, user:User):Observable<HTTPResponse<User>>{
    return this.privateBackofficeService.updateData(`${ this._params }/${id}`, user);
  }

  /**
   * Remove the specified User from storage
   * @param id 
   * @returns Http response with the object deleted
   */ 
   deleteUserById(id:number):Observable<HTTPResponse<User>>{
    return this.privateBackofficeService.deleteDataById(`${this._params}/${id}`);
  }
  
}
