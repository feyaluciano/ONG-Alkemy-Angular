import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { User } from '../../../../models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent  {
  title = 'branchJose';
  forma:FormGroup;

  constructor(private fb:FormBuilder,private userStatusService:UserStatusService){
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
      id: "745",
      name: "userRandom",
      email: "test@demo.com",
      email_verified_at: "null",
      password: "$2y$10$C5in4MViSdBHeSwiDgGnReRLFNKe9ckagLuXNbZtV2.ZrFJv4z9pG",
      role_id: "1",
      remember_token: "null",
      created_at: "2021-11-03T19:22:53.000000Z",
      updated_at: "2021-11-03T19:22:53.000000Z",
      deleted_at: "",
      group_id: "",
      latitude: "",
      longitude: "",
      address: "",
      profile_image: ""
    }

    this.userStatusService.setUser(userLogin);

    this.userStatusService.setToken("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9vbmdhcGkuYWxrZW15Lm9yZ1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzNTk3NDUwMywiZXhwIjoxNjM1OTc4MTAzLCJuYmYiOjE2MzU5NzQ1MDMsImp0aSI6InVpYllFUVdMRXZsVUNxUTQiLCJzdWIiOjc0NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.ALWebh7krXvaa7nx-ILl2sfeMV7xc7ukY8s_OuDEyRE");

    console.log(userLogin);

  }

}
