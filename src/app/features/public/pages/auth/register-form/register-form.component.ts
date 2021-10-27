import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/User';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form:FormGroup;
  editing:boolean=false;
  constructor(private _builder:FormBuilder,private router:Router) {
    this.form=this._builder.group({
      Email:['',[Validators.required,Validators.email]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],   
    });
   }

save(){
  //this functionality is temporary and will be replaced by a service
  if (this.form.valid) {
        const user:User={"Email":this.form.get('Email')?.value,"Password":this.form.get('Password')?.value} 
        localStorage.setItem('userLogged', JSON.stringify(user));
        this.router.navigate(['/home']);  
  }
  else {
    this.form.markAllAsTouched();
    
  }

}

  

  ngOnInit(): void {
    this.editing=false;
  }

}
