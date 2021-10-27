import { Injectable } from "@angular/core";
import { User } from "src/app/features/public/models/User";

@Injectable({
  providedIn: "root",
})
export class UserStatusService {
  private user!: User;

  constructor() {}

  isUserLoggedIn(): boolean {
    return this.getUser() != undefined;
  }

  getUser() {
    var user;
    try {
      this.user = JSON.parse(
        JSON.stringify(localStorage.getItem("userLogged"))
      );
    } catch (Error) {
      this.user = {};
    }
    return this.user;
  }
  async setUser(user: User) {
    var token = "";
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
