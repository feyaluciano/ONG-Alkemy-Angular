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
import { getAuth, getAuthComplete} from "src/app/core/redux/selectors/auth.selectors";
import { User } from "src/app/features/models/User";

@Injectable({
  providedIn: "root",
})
export class BackofficeGuard implements CanActivate {
  private role_id: number | undefined=2 ;
  authentication$: Observable<AuthState>;
  constructor(private store: Store<AuthState>, private router: Router) {
    this.authentication$ = this.store.pipe(select(getAuthComplete));
    this.authentication$.subscribe((stateUser) => {
     this.role_id = stateUser.user!.role_id;;            
    });
  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {    
     if (this.role_id==2) {
      this.router.navigate(["/home"]);
      return false;
    }
    return true;    
  }
}
