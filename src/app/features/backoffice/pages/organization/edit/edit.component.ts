import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  name!:string;
  logo!:string;
  shortDescription!:string ;
  form!:FormGroup;
  organization = {};

  constructor(private http:HttpService, private fb:FormBuilder) {
    this.http.get(`${environment.apiUrl}/organization/`).subscribe((resp:any)=>{
      this.name = resp.data.name;
      this.logo = resp.data.logo;
      console.log(this.name, 'este es el nombre')
      this.shortDescription = resp.data.short_description
    })
   }

  ngOnInit() {
    this.form = this.fb.group({
      name : [`SomosMas`, Validators.required],
      description: [`Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en cada individuo a través de la educación, salud, trabajo, deporte, responsabilidad y compromiso.`, Validators.required]
    })


   
  }

  get nameInvalid(){
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }

  get descriptionInvalid(){
    return this.form.get('description')?.invalid && this.form.get('description')?.touched;
  }

  

  save(){
    this.organization = {
      name: this.name,
      shortDescription: this.shortDescription,
      logo: this.logo    }

    this.http.post(`${environment.apiUrl}/organization/`, this.organization ).subscribe((resp:any)=>{
      this.name = resp.data.name;
      this.logo = resp.data.logo;
      this.shortDescription = resp.data.short_description
    })
  }

}
