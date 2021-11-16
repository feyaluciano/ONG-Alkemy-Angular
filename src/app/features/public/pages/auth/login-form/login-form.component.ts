import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { login } from 'src/app/core/redux/actions/auth.actions';

import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';

import { AuthState } from '../../../../../core/redux/reducers/authReducer.reducer';
import { Observable } from 'rxjs';
import { getAuth } from 'src/app/core/redux/selectors/auth.selectors';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit  {
  title = 'branchJose';
  forma:FormGroup;
  urlApi = environment.apiUrl;
  userLogin:string ="";
  token:string = "";

  authentication$: Observable<boolean>;

  constructor(private fb:FormBuilder, private Router:Router, private store: Store<AuthState>){
      this.forma = this.fb.group({
      email:   ['test@demo.com', [Validators.required, Validators.email]],
      password: ['@Cepita67',  [Validators.required, Validators.minLength(6), 
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/)]],
    });

    
    this.authentication$ = this.store.pipe(select(getAuth));
      

  } 

  ngOnInit(): void {
    
    
  }

  
 get emailInvalid(){
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched;
  }

 get passwordInvalid(){
    return this.forma.get('password')?.invalid && this.forma.get('password')?.touched;
  }
  


 login(){

  if( this.forma.valid ){

  // DISPATCH ACTION LOGIN
  let loginAction = { email: this.forma.get('email')!.value, password: this.forma.get('password')!.value};
  this.store.dispatch(login(loginAction));

  this.authentication$.subscribe( auth => {
    if(auth){

      this.Router.navigate(["backoffice/dashboard"]);
      
    }
  });

  }  

 }

}