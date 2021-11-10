import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';
import { News } from '../../../features/models/news.interface';
import { Category } from 'src/app/features/models/category.model';

import Swal from 'sweetalert2';
import { CategoriesService } from '../../../features/services/categories/categories.service';
import { NewsService } from '../../../features/services/news/news.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() news!: News;

  contentCKeditor!: string;
  imageB64!: string;

  categories!: Category[];

  actionBtn: string = 'Crear';

  edit: boolean = false;
  

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)] ],
    image: ['', Validators.required ],
    category_id: ['', Validators.required ]
  });  

  constructor( 
    private fb: FormBuilder, 
    private ckeditorService: CkeditorService, 
    private categoriesServices: CategoriesService,
    private newsServices: NewsService,
    private router: Router ) {

      

    }

  

  ngOnInit(): void {

    this.ckeditorService.getHandlerTextEditor$().subscribe( (r) => { 

      this.contentCKeditor = r; 
      
    });

    
    this.categoriesServices.getAllCategories().subscribe( c => {
      this.categories = c.data;
    });

    if(this.news){
      this.actionBtn = 'Editar'
      this.edit = true;
      this.form.get('name')?.setValue(this.news.name);
      this.form.get('image')?.setValue(this.news.image);
      this.imageB64 = this.news.image;
      this.form.get('category_id')?.setValue(this.news.category_id);
      this.ckeditorService.textEditor$.next(this.news.content);
    }    

    
  }  

  uploadImg(event:any){    

    const file = event.target.files[0];
    const reader = new FileReader();

    if(event.target.value){

      this.form.get('image')?.setValue(file.name);

      // .png o .jpg save img
      if(file.type == 'image/png' || file.type == 'image/jpg' || file.type == 'image/jpeg'){
        
        //this.imgError = false;
        reader.readAsDataURL(file);
        reader.onload = () => { 

      
        this.imageB64 = "data:image/png;base64," + reader.result?.toString().split(',')[1];;
        
      
        };  

      } 
    }

  }

  errorMsg(controlName: string, error: string){
    return Boolean( this.form.get(controlName)?.hasError(error) && this.form.get(controlName)?.touched );
  }

  
  createNews(){

    let date: string = (new Date()).toLocaleDateString() + " " + (new Date()).toLocaleTimeString();

    if(this.contentCKeditor){

      if(this.form.valid){
      
        let news: News = {
          name: this.form.get('name')?.value,
          content: this.contentCKeditor,
          image: this.imageB64,
          category_id: this.form.get('category_id')?.value,
          created_at: date,
          updated_at: null,
          deleted_at: null,
          slug: null,
          user_id: null
        }
        
        // For edits a news it's necessary add a new imgBase64
        if(this.edit){

          let id: string = this.news.id?.toString()!;

          this.newsServices.updateNews(id, news).subscribe( r => {
            console.log(r.message);
            this.form.reset();
            this.ckeditorService.textEditor$.next("");
            // agregar sweet alert
          });
        } else {
          this.newsServices.createNews(news).subscribe( r => {
            console.log(r.message);
            this.form.reset();
            this.ckeditorService.textEditor$.next("");
            // agregar sweet alert
          });
        }
        


      } else {
        Swal.fire({
          title: 'Error',
          text: 'Campos incompletos.',
          icon: 'error'
        });
      }
    } else {
      // ckEditor error
      Swal.fire({
        title: 'Error',
        text: 'Ingrese una descripción.',
        icon: 'error'
      });
    }
    
  }

  back(){
    this.ckeditorService.textEditor$.next("");
    this.form.reset();
    this.router.navigate(['/backoffice/dashboard']);
  }


}
