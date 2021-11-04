import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { ImageFile } from 'src/app/features/models/ImageFile';
import { Slide } from 'src/app/features/public/models/slide';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { PrivateBackofficeService } from '../../services/private-backoffice.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {


  

  public form: FormGroup;
  public editing: boolean = false;
  public sending: boolean = false;
  public action: string = "";
  public anSlide: Slide = {};
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
    private httpService: HttpService,
    private ckeditorSvc: CkeditorService,
    private backofficeServices: PrivateBackofficeService
  ) {
    this.form = this._builder.group({
      name: ["", [Validators.required]],
      description: ["",],
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
      let slide: Slide = {
        name: this.form.get("name")?.value,
        image: this.anImage,
        description: this.textEditor,
      };
      if (this.editing) {
        this.alertMessage = "La actividad fue editada correctamente";
        slide.id = this.anSlide.id;
        slide.image = this.anImage;                
        this.httpService
          .put(
            environment.apiUrl + "/slides/" + this.anSlide.id,
            slide
          )
          .subscribe((result) => {
            let resultData: any = JSON.parse(JSON.stringify(result));
            Swal.fire(this.alertMessage.toString()).then(() => {
              this.router.navigate(["/dashboard"]);
            });
          });
      } else {        
        this.alertMessage = "La actividad fue agregada correctamente";
        this.anSlide.id = "0";
        this.anSlide.image = this.anImage;
        this.httpService
          .post(environment.apiUrl + "/slides", slide)
          .subscribe((result) => {
            let resultData: any = JSON.parse(JSON.stringify(result));
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

  ngOnInit(): void {
    if (typeof this.route.snapshot.params["id"] !== "undefined") {
      this.editing = true;
      this.action = "Edit Slide";
      const url: string =
        environment.apiUrl +
        "/slides/" +
        this.route.snapshot.params["id"];
      this.httpService.get(url).subscribe((result) => {
        let resultData: any = JSON.parse(JSON.stringify(result));
        this.anSlide = JSON.parse(JSON.stringify(resultData.data));
        this.ckeditorSvc.textEditor$.next(this.anSlide.description!)
        this.form.setValue({
          name: this.anSlide.name,
          image: this.anSlide.image,
          description: this.anSlide.description,
        });
      });
    } else {
      this.editing = false;
      this.action = "New Slide";
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

}
