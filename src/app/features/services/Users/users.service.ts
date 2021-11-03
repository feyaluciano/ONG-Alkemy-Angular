import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class NewsUsersService {

  private url: string = 'http://ongapi.alkemy.org/api/users';

  constructor( private http: HttpClient, private httpService: HttpService ) { }

  /** USERS */

  // GET    -> Get a listing of the Users
  getAllUsers(){
    return this.httpService.get(this.url);
  }

  // GET    -> Display the specified User
  getUserById(id:number){    
    this.httpService.get(`${this.url}/${id}`);
  }

  // DELETE -> Remove the specified User from storage
  deleteUserById(id:number){
    return this.httpService.delete(`${this.url}/${id}`);
  }


  /** ESPERANDO QUE SE RESUELVAN LOS PROBLEMAS DE LA API */
  // POST   -> Store a newly created User in storage
  createUser(user:User){   

   
  }
  
  // PUT    -> Update the specified User in storage
  updateUserById(id:number, user:User){
    
  }

  

  

}
