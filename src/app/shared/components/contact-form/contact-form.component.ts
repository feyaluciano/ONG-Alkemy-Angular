import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import  * as L from 'leaflet';
import 'mapbox-gl-leaflet';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  
  contactForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
      Validators.minLength(8)
    ]),
    message: new FormControl('', [
      Validators.required
    ])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

    // TODO: Remove console.logs and add logic here

    console.log('name:', this.contactForm.value.name);

    console.log('email:', this.contactForm.value.email);
    
    console.log('phone:', this.contactForm.value.phone);
    
    console.log('message:', this.contactForm.value.message);
    
  }

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.contactForm.get(input)?.hasError(type) && this.contactForm.get(input)?.touched
    );
  }


 



}
