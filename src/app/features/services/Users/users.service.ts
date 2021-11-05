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
