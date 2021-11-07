import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() titlePage: string = 'Formulario Creación Edición Novedades';

  form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)] ],
    image: ['', Validators.required ],
    category_id: ['', Validators.required ]
  });

  descriptionCKeditor!: string;
  imgBase64!: string;

  constructor( private fb: FormBuilder, private ckeditorService: CkeditorService ) { }

  ngOnInit(): void {
    this.ckeditorService.getHandlerTextEditor$().subscribe( (r) => { 

      this.descriptionCKeditor = r; 
      
    });
  }

  uploadImg(event:any){

  }



}
