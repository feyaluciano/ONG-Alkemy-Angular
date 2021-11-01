import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';
import { Organization } from 'src/app/features/models/organization.interface';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {

  //editor = ClassicEditor;
  textCKEditor: string = '';
  ckEditorError: boolean = false;

  img: string = '';
  imgError: boolean = false;
  
  urlPattern: string = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
  

  organizationForm: FormGroup = this.fb.group({
    name: [null, Validators.required ],
    logo: [null, Validators.required ],
    // shortDescription: [ this.textCKEditor ],
    longDescription: [null, Validators.required],
    facebook_url: [null, [Validators.required, Validators.pattern(this.urlPattern)]],
    linkedin_url: [null, [Validators.required, Validators.pattern(this.urlPattern)]],
    instagram_url: [null, [Validators.required, Validators.pattern(this.urlPattern)]],
    twitter_url: [null, [Validators.required, Validators.pattern(this.urlPattern)]]
  });

  constructor( private fb: FormBuilder, private ckeditorService: CkeditorService ) {

    
    
   }

  ngOnInit(): void {

    // ckEditor Placeholder
    // this.editor.create( document.querySelector('#editor'), { 
    //   toolbar: { shouldNotGroupWhenFull: true}, 
    //   placeholder: 'Descripción corta...',
    // });

    this.ckeditorService.getHandlerTextEditor$().subscribe( (r) => { 
      this.textCKEditor = r; 
      this.ckEditorError = false;
    });
    
      
  }   


  errorMsg(controlName: string, error: string){
    return Boolean( this.organizationForm.get(controlName)?.hasError(error) && this.organizationForm.get(controlName)?.touched );
  }

  editOrganization(  ){  
    
    if(this.organizationForm.valid){      

      if(this.textCKEditor){

        let data: Organization = {

          name              : this.organizationForm.controls['name'].value,
          logo              : this.img,
          short_description : this.textCKEditor,
          long_description  : this.organizationForm.controls['longDescription'].value,
          facebook_url      : this.organizationForm.controls['facebook_url'].value,
          linkedin_url      : this.organizationForm.controls['linkedin_url'].value,
          instagram_url     : this.organizationForm.controls['instagram_url'].value,
          twitter_url       : this.organizationForm.controls['twitter_url'].value,

        };

        console.log( data );        

      } else {
        
        this.ckEditorError = true;      }

    } 

    
  }

  uploadImg(event:any){    

    let imgBase64: string = '';

    const file = event.target.files[0];
    const reader = new FileReader();

    if(event.target.value){

      // .png o .jpg save img
      if(file.type == 'image/png' || file.type == 'image/jpg'){
        
        this.imgError = false;
        reader.readAsDataURL(file);
        reader.onload = () => { 
        imgBase64 = "data:image/png;base64," + reader.result?.toString().split(',')[1];
      
        this.img = imgBase64;
      
        };

      } else {
        this.imgError = true;
      }
    }


  }

  
}
