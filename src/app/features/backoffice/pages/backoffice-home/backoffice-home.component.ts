
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/features/services/Users/users.service';
import { CreateUser } from '../../../models/User';



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

  constructor( private fb: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {

    localStorage.setItem('user', JSON.stringify({
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9vbmdhcGkuYWxrZW15Lm9yZ1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzNjA5ODA4MiwiZXhwIjoxNjM2MTAxNjgyLCJuYmYiOjE2MzYwOTgwODIsImp0aSI6ImRTS05RTkdZVmlHTklYZmMiLCJzdWIiOjc0NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.gbafTfG06zu-QroOJQZDROTPQ4_KXvuAFYe9R57iEsQ'
    }));
    
    if( localStorage.getItem('user')){
      let d = JSON.parse(localStorage.getItem('user')!);
      console.log(d.token);
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
      name: 'New User',
      email: 'emailnuevo.233@nuevo2.com',
      password: '123456',
      role_id: 1,
      description: 'Probando la creación de usuarios',
      profile_image: this.img1
    }).subscribe( console.log );
  }

}
