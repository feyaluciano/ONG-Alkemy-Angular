import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HTTPResponse } from 'src/app/features/models/HTTPResponse';
import { StandarDialogComponent } from 'src/app/shared/components/standar-dialog/standar-dialog.component';
import Swal from 'sweetalert2';
import { CkeditorService } from '../../../../../core/services/ckeditor.service';
import { ImageFile } from '../../../../models/ImageFile';
import { User } from '../../../../models/User';
import { UsersService } from '../../../../services/Users/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  action!: string;
  form: FormGroup;
  imageFile!: ImageFile;
  imageError: boolean = false;
  anImage!: string;
  user: User = {};
  textEditor: string | undefined;
  editing: boolean = false;
  alertMessage!: string;
  sending: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private ckEditorSvc: CkeditorService,
    private route: ActivatedRoute,
    private usersSvc: UsersService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      role_id: ['', [Validators.required]],
      profile_image: ['', [Validators.required]],
    });

    this.ckEditorSvc.ckeditorTrigger.subscribe((resp: any) => {
      this.textEditor = resp.data;
    });
  }

  ngOnInit(): void {
    if (typeof this.route.snapshot.params["id"] !== "undefined") {
      this.editing = true;
      this.action = "Editar Usuario";     
        const req: Observable<HTTPResponse<User>> = this.usersSvc.getUserById(this.route.snapshot.params["id"]); 
        req.subscribe((response) => {
          let resultData: HTTPResponse<User> = response;         
          this.user = JSON.parse(JSON.stringify(resultData.data));         
          // this.ckEditorSvc.textEditor$.next(this.user.description!)
          this.user.description = response.data.description;
          this.form.setValue({
            name: this.user.name,
            email: this.user.email,
            password: this.user.password,
            confirmPassword: this.user.password,
            role_id: this.user.role_id,
            profile_image: this.user.profile_image
          });
        },
        (error)=>{
          let errorMessage="";           
            switch(error.status) { 
              case 404: { 
                errorMessage="Error al obtener el usuario"; 
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
          dialogRef.afterClosed().subscribe(result => { });
        }
        );
       
    } else {
      this.editing = false;
      this.action = "Nuevo Usuario";
    }

    this.ckEditorSvc.getHandlerTextEditor$().subscribe((text) => {
      this.textEditor=text;
    });
  }

  save() {
    this.sending = true;
    if (this.form.valid && !this.imageError) {
      let user: User = {
        name: this.form.get("name")?.value,
        email: this.form.get("email")?.value,
        password: this.form.get("password")?.value,
        role_id: this.form.get("role_id")?.value,
        profile_image: this.anImage,
        description: this.textEditor,
      };
      if (this.editing) {
        this.alertMessage = "El usuario fue editado correctamente";
        user.id = +this.form.value.id;
        user.profile_image = this.anImage;   
        let req: Observable<HTTPResponse<User>> = this.usersSvc.updateUserById(user.id, user);         
        req.subscribe((response) => {         
          let resultData: HTTPResponse<User> = response;   
              Swal.fire(this.alertMessage.toString()).then(() => {
                this.router.navigate(["/dashboard"]);
              });
        });               
      } else {        
        this.alertMessage = "El usuario fue agregado correctamente";
        this.user.id = 0;
        this.user.profile_image = this.anImage;     
        const req: Observable<HTTPResponse<User>> = this.usersSvc.createUser(user);
        req.subscribe((response) => {
          let resultData: any = JSON.parse(JSON.stringify(response));
              this.alertMessage = resultData.message;
              Swal.fire(this.alertMessage.toString()).then(() => {
                this.router.navigate(["/dashboard"]);
              });
        },
        (error: any) => {         
          let dialogRef = this.dialog.open(StandarDialogComponent, {
            height: '300px',
            width: '400px',
            data: {
              type: "error",
              titleToShow:"",
              messageToShow: 'Error al registrar al usuario',
              showButtonsOkCancel:false
            },
          });            
          dialogRef.afterClosed().subscribe(result => { });
        });          
      }
    } else {
      this.sending = false;
      this.form.markAllAsTouched();
      this.alertMessage = "Por favor complete los campos requeridos";
      Swal.fire(this.alertMessage.toString()).then(() => {});
    }
  }

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.form.get(input)?.hasError(type) && this.form.get(input)?.touched
    );
  }

  //------------------------------------------------upload image----------------------------------------------------
  fileEvent(event:any) {
    this.imageFile = { id: "0"}; 
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];   
      if ( (file.type != "image/jpeg") && (file.type != "image/png")   )    {
        this.imageError=true;      
        return false;
      }
      
  
      if ( (file.type != "image/jpeg") && (file.type != "image/png")   )    {
        this.imageError=true;      
        return false;
      }
     
      reader.readAsDataURL(file);
      reader.onload = () => {               
        this.anImage = "data:image/png;base64,"+reader.result!.toString().split(',')[1];         
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
