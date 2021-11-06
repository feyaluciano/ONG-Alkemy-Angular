import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';





@Component({
  selector: 'app-backoffice-home',
  templateUrl: './backoffice-home.component.html',
  styleUrls: ['./backoffice-home.component.scss']
})
export class BackofficeHomeComponent implements OnInit {

  img1: string = '';
  img2: string = '';
  img3: string = '';


  homeForm: FormGroup = this.fb.group({
    txtWelcome: [ "" , [Validators.required, Validators.minLength(20)] ],
    title1: [""],
    title2: [""],
    title3: [""],
    img1:   [""],
    img2:   [""],
    img3:   [""]

  });

  constructor( private fb: FormBuilder, private router: Router ) { }

  ngOnInit(): void {

    

  }

  errorMsg(controlName: string, error: string){
    return Boolean( this.homeForm.get(controlName)?.hasError(error) && this.homeForm.get(controlName)?.touched );
  }


  uploadImg(event: any, controlImg: string){
    

    let imgBase64: string = '';

    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    
    if(controlImg == 'img1'){
      reader.onload = () => { 
        imgBase64 = "data:image/png;base64," + reader.result?.toString().split(',')[1];
        
        this.img1 = imgBase64;        
        
       };
    } else if(controlImg == 'img2'){
      reader.onload = () => { 
        imgBase64 = "data:image/png;base64," + reader.result?.toString().split(',')[1];
        
        this.img1 = imgBase64;
        
       };
    } else {
      reader.onload = () => { 
        imgBase64 = "data:image/png;base64," + reader.result?.toString().split(',')[1];
        
        this.img1 = imgBase64;
        
       };
    }
    
  }

  edit(){
        
    if( this.homeForm.valid ){

      let data = [
        {
          txtWelcome: this.homeForm.controls['txtWelcome'].value
        },
        {
          title1: this.homeForm.controls['title1'].value,
          image: this.img1
        },
        {
          title2: this.homeForm.controls['title2'].value,
          image: this.img2
        },
        {
          title3: this.homeForm.controls['title3'].value,
          image: this.img3
        }
      ];

      localStorage.setItem('data', JSON.stringify(data) );

    } else {
      this.homeForm.markAllAsTouched();
    }
    
  }

  back(){

    this.router.navigate(['/dashboard']);

  }

}
