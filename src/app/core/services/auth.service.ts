import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/features/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  urlApi = environment.apiUrl;
 

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
   
  }

  auth(user:any){
    return this.httpClient.post(`${this.urlApi}/login`, user)
  }

  register(newUser:any){
    return this.httpClient.post(`${this.urlApi}/register`, newUser);
  }

}