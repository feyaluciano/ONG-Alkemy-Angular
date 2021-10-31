import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CkeditorService } from '../../../../../core/services/ckeditor.service';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

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
  aCategory: any = {};
  alertMessage: any;
  editing: boolean = false;
  textEditor!: string;
  description!: boolean;
  action: string = '';

  constructor(
    private ckeditorSvc: CkeditorService,
    private httpSvc: HttpService,
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
      this.action = 'New Category';
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
    this.action = 'Edit Category'; 
    const url: string = `${environment.apiUrl}/categories/${this.actRoute.snapshot.params['id']}`;
    this.httpSvc.get(url).subscribe((result) => {
      let resultData: any = JSON.parse(JSON.stringify(result));
      this.aCategory = JSON.parse(JSON.stringify(resultData.data));
      this.ckeditorSvc.textEditor$.next(this.aCategory.description!);
      this.categoriesForm.setValue({
        name: this.aCategory.name,
        image: this.aCategory.image,
        description: this.aCategory.description,
      });
    });
  }
  
  onSubmit() {

    let category: any = {
      name: this.categoriesForm.value.name,
      image: this.imageSrc,
      description: this.categoriesForm.value.description,
    };
    
    this.aCategory.id = '0';
    this.aCategory.image = this.imageSrc;
    this.httpSvc
      .post(`${environment.apiUrl}/categories`, category)
      .subscribe((result) => {
        let resultData: any = JSON.parse(JSON.stringify(result));
        this.alertMessage = resultData.message;
        Swal.fire(this.alertMessage.toString()).then(() => {
          this.router.navigate(['/dashboard']);
        });
      });
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
