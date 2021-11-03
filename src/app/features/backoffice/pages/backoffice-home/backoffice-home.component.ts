import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsUsersService } from 'src/app/features/services/Users/news-users.service';

@Component({
  selector: 'app-backoffice-home',
  templateUrl: './backoffice-home.component.html',
  styleUrls: ['./backoffice-home.component.scss']
})
export class BackofficeHomeComponent implements OnInit {

  day: Date = new Date();

  img1: string = '';
  img2: string = '';
  img3: string = '';


  homeForm: FormGroup = this.fb.group({
    txtWelcome: [ null , [Validators.required, Validators.minLength(20)] ],
    title1: [null],
    title2: [null],
    title3: [null],
    img1:   [null],
    img2:   [null],
    img3:   [null]

  });

  constructor( private fb: FormBuilder, private newsUsers: NewsUsersService ) { }

  ngOnInit(): void {

    
    
  }

  errorMsg(controlName: string, error: string){
    return Boolean( this.homeForm.get(controlName)?.hasError(error) && this.homeForm.get(controlName)?.touched );
  }


  uploadImg(event: any, controlImg: string){
    //console.log(event);

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
    //this.homeForm.controls['txtWelcome'].setValue('Bienvenidos a Somos más!');
    //console.log(this.homeForm);
    
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

  probandoAPI(){
    
    this.newsUsers.createUser(
      {
        id: 354,
        name: 'Test',
        email: 'test@alkemy.com',
        email_verified_at: "2021-11-02T11:36:06.407Z",
        password: 'test1',
        role_id: 1,
        remember_token: 'asdasdasdas1256',
        created_at: "2021-11-02T11:36:06.407Z",
        updated_at: "2021-11-02T11:36:06.407Z",
        deleted_at: "2021-11-02T11:36:06.407Z",
        group_id: 0,
        latitude: 0,
        longitude: 0,
        address: 'asdasdasdasdasdas',
        profile_image: this.img1.toString()
      }
    ).subscribe( console.log );
  }

}
