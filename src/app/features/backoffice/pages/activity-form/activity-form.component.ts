import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserStatusService } from 'src/app/core/services/user-status.service';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss']
}) 
export class ActivityFormComponent implements OnInit {
  title = 'app-activity-form';
  form!: FormGroup;
  editing: boolean = false;
  constructor(private userStatusService:UserStatusService,private _builder: FormBuilder, private router: Router) { 

    this.form = this._builder.group({
      name: ["", [Validators.required]]});
  

  }

  ngOnInit(): void {
  }

  haveErrorsInputForm(input:string,type:string){    
    return Boolean (this.form.get(input)?.hasError(type) && this.form.get(input)?.touched)    
  }

  save(){

  }

}
