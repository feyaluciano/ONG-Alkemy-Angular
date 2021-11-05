
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/features/services/users/users.service';
import { CreateUser } from '../../../models/User';
import { PrivateBackofficeService } from '../../services/private-backoffice.service';



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

  constructor( private fb: FormBuilder, private usersService: UsersService, private bService: PrivateBackofficeService) { }

  ngOnInit(): void {

    localStorage.setItem('user', JSON.stringify({
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9vbmdhcGkuYWxrZW15Lm9yZ1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzNjExNjE1NiwiZXhwIjoxNjM2MTE5NzU2LCJuYmYiOjE2MzYxMTYxNTYsImp0aSI6IjFTbGFpTFJDZ2ZwbG5ycVkiLCJzdWIiOjc0NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.JCgG27Jd8FXp0qHGns3M-gSXcobjrMPARUHCjXr-vc0'
    }));
    
    if( localStorage.getItem('user')){
      let d = JSON.parse(localStorage.getItem('user')!);
      
    }

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

  testApi(){

    let newUser: CreateUser = {
      name: 'New User',
      email: 'emailnuevo.233@nuevo2.com',
      password: '123456',
      role_id: 1,
      description: 'Probando la creación de usuarios',
      profile_image: this.img1
    };   

    //this.usersService.updateUserById(360,newUser).subscribe( console.log);
    
    this.usersService.createUser({
      name: 'Francisco Post',
      email: 'emailnuevo.2333@nuevo3.com',
      password: '123456',
      role_id: 1,
      description: 'Probando la creación de usuarios',
      profile_image: this.img1
    }).subscribe( console.log );
  }

}
