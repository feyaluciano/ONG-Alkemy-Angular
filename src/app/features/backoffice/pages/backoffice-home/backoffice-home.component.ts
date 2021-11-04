import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/features/services/users/users.service';



@Component({
  selector: 'app-backoffice-home',
  templateUrl: './backoffice-home.component.html',
  styleUrls: ['./backoffice-home.component.scss']
})
export class BackofficeHomeComponent implements OnInit {

  date: Date = new Date;
  day: string = (this.date).toDateString() +" " + (this.date).toLocaleTimeString();

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
        console.log( this.img1 );
        
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

    //console.log(this.day);

    // this.usersService.getAllUsers().subscribe( console.log );
    // this.usersService.getUserById(355).subscribe( console.log );
    this.usersService.createUser({
      id:                999,
      name:              "HTTP POST",
      email:             "email@ejemplo.com",
      email_verified_at: "",
      password:          "123456789",
      role_id:           1,
      remember_token:    "",
      created_at:        this.day,
      updated_at:        "",
      deleted_at:        "",
      group_id:          0,
      latitude:          0,
      longitude:         0,
      address:           "no address",
      profile_image:     this.img1,
      description:       "Futuro programador",
      token:             ""

    }).subscribe( console.log );
  }

}
