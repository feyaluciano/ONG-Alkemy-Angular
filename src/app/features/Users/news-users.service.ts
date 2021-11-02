import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsUsersService {

  private url: string = 'http://ongapi.alkemy.org/api/users';
  

  constructor( private http: HttpClient, private httpService: HttpService ) { }

  // GET    -> Get a listing of the Users
  getAllUsers(){
    return this.httpService.get(this.url);
  }

  // GET    -> Display the specified User
  getUserById(id:number){    
    this.httpService.get(`${this.url}/${id}`);
  }

  // POST   -> Store a newly created User in storage
  createUser(data:any){    
    return this.httpService.post(this.url, data);
  }
  
  // PUT    -> Update the specified User in storage
  updateUserById(id:number, data:any){
    return this.httpService.put(`${this.url}/${id}`, data);
  }

  // DELETE -> Remove the specified User from storage
  deleteUserById(id:number){
    return this.httpService.delete(`${this.url}/${id}`);
  }

}
