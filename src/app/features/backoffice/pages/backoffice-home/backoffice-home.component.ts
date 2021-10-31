import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-backoffice-home',
  templateUrl: './backoffice-home.component.html',
  styleUrls: ['./backoffice-home.component.scss']
})
export class BackofficeHomeComponent implements OnInit {


  homeForm: FormGroup = this.fb.group({
    txtWelcome: [ '',[Validators.required, Validators.minLength(20)]]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  errorMsg(controlName: string, error: string){
    return Boolean( this.homeForm.get(controlName)?.hasError(error) && this.homeForm.get(controlName)?.touched );
  }

  edit(){
    console.log(this.homeForm);
    // console.log('required', this.homeForm.controls['txtWelcome'].hasError('required'));
    // console.log('minLength', this.homeForm.controls['txtWelcome'].hasError('minlength'));
    
  }

}
