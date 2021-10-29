import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CkeditorService } from '../../../../../core/services/ckeditor.service';

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
    ]),
    image: new FormControl(null, [
      Validators.required
    ])
  });

  public imageSrc: string = '';

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

  // https://stackoverflow.com/questions/48216410/angular-4-base64-upload-component
  handleInputChange(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.imageSrc = reader.result;

    this.categoriesForm.value.image = this.imageSrc;

  }

}
