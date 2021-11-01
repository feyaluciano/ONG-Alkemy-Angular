import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  organizationForm: FormGroup = this.fb.group({
    name: [null, Validators.required ],
    logo: [null, Validators.required ],
    shortDescription: [null, Validators.required ],
    longDescription: [null, Validators.required],
    facebook_url: [null, [Validators.required]],
    linkedin_url: [null, [Validators.required]],
    instagram_url: [null, [Validators.required]],
    twitter_url: [null, [Validators.required]]
  });

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  errorMsg(controlName: string, error: string){
    return Boolean( this.organizationForm.get(controlName)?.hasError(error) && this.organizationForm.get(controlName)?.touched );
  }

  editOrganization(){

  }

  uploadImg(event:any){

  }

}
