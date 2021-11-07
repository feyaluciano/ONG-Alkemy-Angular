import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';
import { News } from '../../../features/models/news.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() titlePage: string = 'Formulario Creación Edición Novedades';

  contentCKeditor!: string;
  imageB64!: string;
  actionBtn: string = 'Crear';
  edit: boolean = false;

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)] ],
    image: ['', Validators.required ],
    category_id: ['', Validators.required ]
  });

  

  constructor( private fb: FormBuilder, private ckeditorService: CkeditorService ) { }

  ngOnInit(): void {
    this.ckeditorService.getHandlerTextEditor$().subscribe( (r) => { 

      this.contentCKeditor = r; 
      
    });
  }

  uploadImg(event:any){    

    let imgBase64: string = '';

    const file = event.target.files[0];
    const reader = new FileReader();

    if(event.target.value){

      // .png o .jpg save img
      if(file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg'){
        
        //this.imgError = false;
        reader.readAsDataURL(file);
        reader.onload = () => { 

        let imgBase64: string = "data:image/png;base64," + reader.result?.toString().split(',')[1];
      
        this.imageB64 = imgBase64;
        
      
        };

        

      } else {
        //this.imgError = true;
      }
    }

  }

  errorMsg(controlName: string, error: string){
    return Boolean( this.form.get(controlName)?.hasError(error) && this.form.get(controlName)?.touched );
  }


  createNews(){

    let date: string = (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString();

    

    if(this.form.valid){
      
      let news: News = {
        name: this.form.get('name')?.value,
        content: this.contentCKeditor,
        image: this.imageB64,
        category_id: 1,
        created_at: date,
        updated_at: null,
        deleted_at: null,
        slug: null,
        user_id: null
      }

      // petición POST
      console.log(news);
    }
    
  }


}
