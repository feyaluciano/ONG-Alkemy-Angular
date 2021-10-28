import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { User } from '../../../models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent  {
  title = 'branchJose';
  forma:FormGroup;

  constructor(private fb:FormBuilder){
      this.forma = this.fb.group({
      email:   ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.required, Validators.minLength(6), 
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
      const userLogin:User = {
        email: this.forma.get('email')?.value,
        password: this.forma.get('password')?.value
    }

    console.log(userLogin);

  }

}
