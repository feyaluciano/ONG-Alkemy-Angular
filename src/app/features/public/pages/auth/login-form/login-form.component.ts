import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import { Data, User } from '../../../../models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent  {
  title = 'branchJose';
  forma:FormGroup;
  urlApi = environment.apiUrl;
  userLogin:string ="";
  token:string = "";

  constructor(private fb:FormBuilder, private httpClient:HttpClient, private authServices:AuthService, private Router:Router){
      this.forma = this.fb.group({
      email:   ['test@demo.com', [Validators.required, Validators.email]],
      password: ['@Cepita67',  [Validators.required, Validators.minLength(6), 
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/)]],
    });
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
      localStorage.setItem("userToken", JSON.stringify(this.token));
      this.Router.navigate(["/dashboard"])
    })

     
     



 }

}