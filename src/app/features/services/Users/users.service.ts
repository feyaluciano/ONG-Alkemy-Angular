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
   * Get a listing of the Users
   * @returns Users[]
   */
  getAllUsers():Observable<HTTPResponse<User[]>>{
    return this.privateBackofficeService.getAll(this._params);
  }

  // GET    -> Display the specified User
  getUserById(id:number):Observable<HTTPResponse<User>>{  
    return this.privateBackofficeService.getById(this._params, id);
    
  }

  // POST   -> Store a newly created User in storage
  createUser(user:User):Observable<HTTPResponse<User>>{   
  
   return this.privateBackofficeService.createData(this._params, user);
  }
  
  // PUT    -> Update the specified User in storage
  updateUserById(id:number, user:User):Observable<HTTPResponse<User>>{
    return this.privateBackofficeService.updateData(`${ this._params }/${id}`, user);
  }

  // DELETE -> Remove the specified User from storage
  deleteUserById(id:number):Observable<HTTPResponse<User>>{
    return this.privateBackofficeService.deleteDataById(`${this._params}/${id}`);
  }
}
