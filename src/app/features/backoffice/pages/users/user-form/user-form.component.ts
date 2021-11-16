import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { CreateUser, User } from 'src/app/features/models/User';
import { HTTPResponse } from 'src/app/features/models/HTTPResponse';
import { ImageFile } from 'src/app/features/models/ImageFile';
import { UsersService } from 'src/app/features/services/Users/users.service';
import { StandarDialogComponent } from 'src/app/shared/components/standar-dialog/standar-dialog.component';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  public form: FormGroup;
  public editing: boolean = false;
  public sending: boolean = false;
  public action: string = "";
  public anUser: User = {};
  private alertMessage!: String;
  public textEditor!:string;

  private imageFile!:ImageFile;
  public imageError=false;
  public anImage!:string;


  

  constructor(
    private userStatusService: UserStatusService,
    private _builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ckeditorSvc: CkeditorService,
    private usersService:UsersService,
    public dialog: MatDialog
  ) {
    this.form = this._builder.group({
      name: ["", [Validators.required]],
      email: ["",],
      image: ["", [Validators.required]],
    });
  }

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.form.get(input)?.hasError(type) && this.form.get(input)?.touched
    );
  }

  save() {
    if (this.form.valid && !this.imageError) {
      this.sending = true;      
      let user: User = {
        name: this.form.get("name")?.value,
        profile_image: this.anImage,
        description: this.textEditor,
      };
      if (this.editing) {
        this.alertMessage = "La actividad fue editada correctamente";
        user.id = this.anUser.id;
        user.profile_image = this.anImage; 
        let createUser:CreateUser = {name:this.anUser.name!,email:this.anUser.email!,password:this.anUser.password!,role_id:this.anUser.role_id!,profile_image: this.anImage,description:this.anUser.description!};
        const url: string =
        environment.usersApiUrl   
        let req:Observable<HTTPResponse<User>>= this.usersService.updateUserById(Number(user.id),createUser);         
        req.subscribe((response) => {         
          let resultData: HTTPResponse<User> = response;   
              Swal.fire(this.alertMessage.toString()).then(() => {
                this.router.navigate(["/dashboard"]);
              });
        });               
      } else {        
        this.alertMessage = "La actividad fue agregada correctamente";        
        this.anUser.id = 0;
        this.anUser.profile_image = this.anImage;
        const url: string =
        environment.usersApiUrl;
        let createUser:CreateUser = {name:this.anUser.name!,email:this.anUser.email!,password:this.anUser.password!,role_id:this.anUser.role_id!,profile_image: this.anImage,description:this.anUser.description!};     
        const req:Observable<HTTPResponse<User>>= this.usersService.createUser(createUser);
        req.subscribe((response) => {
          let resultData: any = JSON.parse(JSON.stringify(response));
              this.alertMessage = resultData.message;
              Swal.fire(this.alertMessage.toString()).then(() => {
                this.router.navigate(["/dashboard"]);
              });
        });          
      }
    } else {
      this.sending = false;
      this.form.markAllAsTouched();
      this.alertMessage = "Por favor complete los campos requeridos";
      Swal.fire(this.alertMessage.toString()).then(() => {});
    }
  }
  
   ngOnInit() {
    
    if (typeof this.route.snapshot.params["idUser"] !== "undefined") {
      this.editing = true;
      this.action = "Editar actividad";     
        const req:Observable<HTTPResponse<User>> = this.usersService.getUserById(this.route.snapshot.params["idUser"]); 
        req.subscribe((response) => {
          let resultData: HTTPResponse<User> = response;         
          this.anUser = JSON.parse(JSON.stringify(resultData.data));         
          this.ckeditorSvc.textEditor$.next(this.anUser.description!)
          this.form.setValue({
            name: this.anUser.name,
            image: this.anUser.profile_image,
            description: this.anUser.description,
          });
        },
        (error)=>{
          let errorMessage="";           
            switch(error.status) { 
              case 404: { 
                errorMessage="Error al obtener la actividad"; 
                 break; 
              } 
              case 401: {  
                errorMessage="Usted no esta autorizado para acceder a este recurso";
                 break; 
              } 
              default: { 
                errorMessage="Error desconocido";
                 break; 
              } 
           }    
          
           let dialogRef = this.dialog.open(StandarDialogComponent, {
            height: '300px',
            width: '400px',
            data: {type: "error", titleToShow:"",messageToShow: errorMessage,showButtonsOkCancel:false},
          });            
          dialogRef.afterClosed().subscribe(result => {
            console.log(`if it is ok, the user press accept: ${result}`); 
          });
      
      



        }
        );
       
    } else {
      this.editing = false;
      this.action = "Nueva actividad";
    }

    this.ckeditorSvc.getHandlerTextEditor$().subscribe((text) => {
      this.textEditor=text;
    });
  }












//------------------------------------------------upload image----------------------------------------------------
fileEvent(event:any) {
  this.imageFile={ id: "0"}; 
  let reader = new FileReader();
  if(event.target.files && event.target.files.length > 0) {
    let file = event.target.files[0];   
    if ( (file.type!="image/jpeg") && (file.type!="image/png")   )    {
      this.imageError=true;      
      return false;
    }
    

    if ( (file.type!="image/jpeg") && (file.type!="image/png")   )    {
      this.imageError=true;      
      return false;
    }
   
    reader.readAsDataURL(file);
    reader.onload = () => {               
      this.anImage="data:image/png;base64,"+reader.result!.toString().split(',')[1];         
      var img = new Image();             
      img.addEventListener('load',
    function(){
      var formElement = <HTMLFormElement>document.getElementById('imageError');       
      // if (( img.width !== 590) || ( img.height !== 340) )    {  
      //   formElement.value="true";               
      // } else {
      //   formElement.value="false";
      // }
     }    
    ,false);

    img.src = this.anImage;    
    this.imageFile.imageFile=reader.result!.toString().split(',')[1];            
    };


  }
  return true;
}

//------------------------------------------------end upload image----------------------------------------------------





}
