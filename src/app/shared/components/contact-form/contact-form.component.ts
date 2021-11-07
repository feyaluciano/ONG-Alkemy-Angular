import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  @Input() title!: string;
  form!: FormGroup;
  isContactForm!: boolean;
  isCreateUserForm!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
    switch (this.router.url) {
      case '/contacto':
        this.isContactForm = true;
        this.addContactFields();
        break;
      case '/backoffice/users/create':
        this.isCreateUserForm = true;
        this.addCreateUserFields();
        break;
      default:
        break;
    }

  }

  ngOnInit(): void {
  }

  createForm() {
    this.form = this.formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      otherFields: this.formBuilder.array([])
    });
  }

  get otherFields(): FormArray {
    return this.form.get('otherFields') as FormArray;
  }

  addContactFields() {
    const contact = this.formBuilder.group({
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(8)
      ]),
      message: new FormControl('', [
        Validators.required
      ])
    });

    this.otherFields.push(contact);

    // console.log(this.form.get('otherFields')?.value[0]);

    // console.log(this.otherFields.controls[0].get('phone')?.hasError('required'));
    // console.log(this.otherFields.controls[0]);    
  }

  addCreateUserFields() {
    const user = this.formBuilder.group({
      role: new FormControl('', [
        Validators.required
      ]),
      profilePhoto: new FormControl('', [
        Validators.required
      ])
    });

    this.otherFields.push(user);
  }

  onSubmit() {

    console.log('Form submited');
    
    
  }

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.form.get(input)?.hasError(type) && this.form.get(input)?.touched
    );
  }

}
