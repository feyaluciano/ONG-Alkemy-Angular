import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  form:FormGroup;
  editing:boolean=false;
  constructor(private _builder:FormBuilder,) {
    this.form=this._builder.group({
      Email:['',[Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],   
    });
   }

save(){

}

   haveErrorInputForm(input:string){
    //return this.form!.get(input).hasError('required') && this.form!.get(input).touched;
   }

  ngOnInit(): void {
    this.editing=false;
  }

}
