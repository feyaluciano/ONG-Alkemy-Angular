import { Injectable } from "@angular/core";
import { User } from "src/app/features/public/models/User";

@Injectable({
  providedIn: "root",
})
export class UserStatusService {
  private user!: User;

  constructor() {}

  async isUserLoggedIn() {      
    let isLogged=await this.getUser();
    if (isLogged==="null") {       
        return false;
     } else {      
        return true;
     }
  }

  async getUser() {
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
   async setUser(user: User) {
    try {
      localStorage.setItem("userLogged", JSON.stringify(user));
    } catch (Error) {
      this.user = {};
    }
    return this.user;
  }
  async deleteUser() {
    localStorage.setItem("userLogged", null!);
  }
}
