import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { HTTPResponse } from '../../../core/interfaces/httpResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _params: string = '/users';

  constructor( private privateBackofficeService: PrivateBackofficeService ) { }

  /** USERS */

  // GET    -> Get a listing of the Users
  getAllUsers():Observable<HTTPResponse>{
    return this.privateBackofficeService.getAll(this._params);
  }

  // GET    -> Display the specified User
  getUserById(id:number):Observable<HTTPResponse>{  
    return this.privateBackofficeService.getById(this._params, id);
  }



  // DELETE -> Remove the specified User from storage
  deleteUserById(id:number){
    
  }


  /** ESPERANDO QUE SE RESUELVAN LOS PROBLEMAS DE LA API */
  // POST   -> Store a newly created User in storage
  createUser(user:User):Observable<HTTPResponse>{   

   return this.privateBackofficeService.createData(this._params, user);
  }
  
  // PUT    -> Update the specified User in storage
  updateUserById(id:number, user:User){
    
  }
}
