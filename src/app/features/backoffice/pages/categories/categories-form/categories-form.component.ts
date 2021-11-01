import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CkeditorService } from 'src/app/core/services/ckeditor.service';


@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

  categoriesForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required
    ]),
    description: new FormControl(null, [
      Validators.required
    ])
  });

  constructor(
    private ckeditorSvc: CkeditorService
  ) {
    this.ckeditorSvc.ckeditorTrigger.subscribe((data: any) => {
      
      this.categoriesForm.value.description = data.data;

      
    });
  }
  
  ngOnInit(): void {
  }
  
  onSubmit() {
    
    console.log(this.categoriesForm.value);
  }

}
