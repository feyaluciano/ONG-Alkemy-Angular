import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { login } from 'src/app/core/redux/actions/auth.actions';

import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import { User } from '../../../../models/User';

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

  constructor(private fb:FormBuilder, private httpClient:HttpClient, private authServices:AuthService, private Router:Router, private store: Store){
      this.forma = this.fb.group({
      email:   ['test@demo.com', [Validators.required, Validators.email]],
      password: ['@Cepita67',  [Validators.required, Validators.minLength(6), 
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/)]],
    });
  }
  ngOnInit(): void {
    this.store.subscribe(  console.log );

    let user = {
      email:'test@demo.com',
      password:'@Cepita67'
    }

    this.store.dispatch(login(user));
  }

  
 get emailInvalid(){
    return this.forma.get('email')?.invalid && this.forma.get('email')?.touched;
  }

 get passwordInvalid(){
    return this.forma.get('password')?.invalid && this.forma.get('password')?.touched;
  }
  

   save(){
      const user:User = {
        email: this.forma.get('email')?.value,
        password: this.forma.get('password')?.value
    }

    

    this.authServices.auth(user).subscribe((resp:any)=>{
      this.userLogin = resp.data.user;
      this.token = resp.data.token;

      // LAS ACCIONES SE DISPARAN ACÁ
      // const { user, token } = resp.data;
      // this.store.dispatch(login({ user , token }));

      localStorage.setItem("userToken", JSON.stringify(this.token));
      localStorage.setItem("user", JSON.stringify(this.userLogin));
      this.Router.navigate(["/dashboard"])
    })

     
     



 }

}