import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/features/models/User";

@Injectable({
  providedIn: "root",
})
export class UserStatusService {
  private user!: User;

  constructor() {}

   isUserLoggedIn() {      
    let isLogged= this.getUser();
    if (Boolean(isLogged)) {       
        return false;
     } else {      
        return true;
     }
  }

   getUser() {
    let user;
    try {
      this.user = JSON.parse(
        JSON.stringify(localStorage.getItem("userLogged"))
      );
    } catch (Error) {
      this.user = null!;
    }
    return this.user;
  }
  
  
  getToken() {
    return localStorage.getItem("token");    
  }

  setToken(token: string) {    
      localStorage.setItem("token", JSON.stringify(token));    
  }





  getHeaders(){    
    let token:String=this.getToken()!;    
    let _headersAutorization:string="";
    if(Boolean(token)){      
      _headersAutorization="Bearer "+this.getToken();      
    }    
    return _headersAutorization;
  }


  
  setUser(user: User) {
    try {
      localStorage.setItem("userLogged", JSON.stringify(user));
    } catch (Error) {
      this.user = {};
    }
    return this.user;
  }
  
  
  deleteUser() {
    localStorage.setItem("userLogged", null!);
  }
}
