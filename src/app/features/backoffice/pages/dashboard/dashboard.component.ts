import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/core/redux/reducers/authReducer.reducer';
import { Observable } from 'rxjs';
import { getAuth } from '../../../../core/redux/selectors/auth.selectors';
import { Router } from '@angular/router';
import { logout } from 'src/app/core/redux/actions/auth.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  authentication$: Observable<boolean>

  constructor( private store: Store<AuthState>, private router: Router) {
    this.authentication$ = this.store.pipe(select(getAuth));
   }

  ngOnInit(): void {

    
    
  }

  logOut(){

    this.store.dispatch(logout());

    this.authentication$.subscribe( auth =>{

      if(!auth){
        this.router.navigate(['login']);
      } 
    });

  }

}
