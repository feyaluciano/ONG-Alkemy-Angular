import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthState } from "../redux/reducers/authReducer.reducer";
import { getAuth } from "src/app/core/redux/selectors/auth.selectors";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  loggedIn: boolean = false;
  authentication$: Observable<boolean>;
  constructor(private store: Store<AuthState>, private router: Router) {
    this.authentication$ = this.store.pipe(select(getAuth));

    this.authentication$.subscribe((auth) => {
      this.loggedIn = auth;
    });
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     if (this.loggedIn) {
      this.router.navigate(["/home"]);
      return false;
    }
    return true;
  }
}
