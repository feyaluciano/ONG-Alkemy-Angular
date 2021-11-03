import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CkeditorService } from '../../../../../core/services/ckeditor.service';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageFile } from '../../../../models/ImageFile';
import { PrivateBackofficeService } from '../../../services/private-backoffice.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  categoriesForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
    description: new FormControl(null),
    image: new FormControl(null, [
      Validators.required,
    ])
  });

  imageSrc!: string | ArrayBuffer | null;
  aCategory: any = {};
  alertMessage: any;
  editing: boolean = false;
  textEditor!: string;
  description!: boolean;
  action: string = '';
  sending!: boolean;
  imageError: boolean = false;
  imageFile!: ImageFile;

  constructor(
    private ckeditorSvc: CkeditorService,
    private httpSvc: HttpService,
    private backofficeSvc: PrivateBackofficeService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) {
    this.ckeditorSvc.ckeditorTrigger.subscribe((data: any) => {
      this.categoriesForm.value.description = data.data;
      this.description = Boolean(data.data);
    });
  }
  
  ngOnInit(): void {
    if (typeof this.actRoute.snapshot.params['id'] !== 'undefined') {
      this.editCategory();
    } else {
      this.editing = false;
      this.action = 'Nueva Categoría';
    }

    this.ckeditorSvc.getHandlerTextEditor$().subscribe((text) => {
      this.textEditor=text;
    });
  }

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.categoriesForm.get(input)?.hasError(type) && this.categoriesForm.get(input)?.touched
    );
  }

  editCategory() {
    this.editing = true; 
    this.action = 'Editar Categoría'; 
    const url: string = `${environment.apiUrl}/categories/${this.actRoute.snapshot.params['id']}`;
    this.httpSvc.get(url).subscribe((result) => {
      let resultData: any = JSON.parse(JSON.stringify(result));
      this.aCategory = JSON.parse(JSON.stringify(resultData.data));
      this.ckeditorSvc.textEditor$.next(this.aCategory.description!);
      this.categoriesForm.setValue({
        name: this.aCategory.name,
        image: '',
        description: this.aCategory.description,
      });
    });
  }
  
  onSubmit() {

    if (this.categoriesForm.valid && !this.imageError) {
      this.sending = true;

      let category: any = {
        name: this.categoriesForm.value.name,
        image: this.imageSrc,
        description: this.categoriesForm.value.description,
      };
  
      if (this.editing) {
        this.alertMessage = 'La categoría fue editada correctamente';
        this.httpSvc
        .put( `${environment.apiUrl}/categories/${this.actRoute.snapshot.params['id']}`, category )
        .subscribe((result) => {
          JSON.parse(JSON.stringify(result));
          Swal.fire(this.alertMessage.toString()).then(() => {
            this.router.navigate(['/dashboard']);
          });
        });
      } else {
        this.alertMessage = "La categoría fue agregada correctamente";
        this.aCategory.id = '0';
        this.aCategory.image = this.imageSrc;
        this.backofficeSvc.createCategory(`${environment.apiUrl}/categories`, category)
          .subscribe((resp: any) => {
            this.alertMessage = resp.message;
            Swal.fire({
              title: 'Success!',
              icon: 'success',
              text: this.alertMessage,
              showConfirmButton: true
            }).then(() => {
              this.router.navigate(['/dashboard']);
            });
          }, (error: any) => {
            this.alertMessage = 'No tiene permiso para crear una categoría';
            Swal.fire({
              title: 'Error',
              text: this.alertMessage,
              showConfirmButton: true,
              icon: 'error'
            });
          });
      }

    } else {
      this.sending = false;
      this.categoriesForm.markAllAsTouched();
      this.alertMessage = "Por favor complete los campos requeridos";
      Swal.fire(this.alertMessage.toString()).then(() => {});
    }
    
    
    
  }

  // https://stackoverflow.com/questions/48216410/angular-4-base64-upload-component
  handleInputChange(event: any) {
    this.imageFile = { id: '0'}; 
    let reader = new FileReader();
    let file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
    const pattern = /image*/;
    if (!file.type.match(pattern)) {
      this.imageError = true;
      return false;
    }
    this.imageError = false;
    reader.readAsDataURL(file);
    reader.onload = () => {               
      this.categoriesForm.value.image = `data:image/png;base64,${reader.result!.toString().split(',')[1]}`;         
      let img = new Image();   
      
      img.addEventListener('load', function(){
        let formElement = <HTMLFormElement>document.getElementById('imageError');       
        // if (( img.width !== 590) || ( img.height !== 340) )    {  
        //   formElement.value="true";               
        // } else {
        //   formElement.value="false";
        // }
       }    
      , false);

    img.src = this.categoriesForm.value.image;    
    this.imageFile.imageFile=reader.result!.toString().split(',')[1];            
    this.imageSrc = reader.result;
    this.categoriesForm.value.image = this.imageSrc;
    };

    return true;
  }

}
