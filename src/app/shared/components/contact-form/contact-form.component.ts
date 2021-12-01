import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import 'mapbox-gl-leaflet';
import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  send:boolean = false;
  response:boolean = false;
  errorServidor:boolean = false;

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

  constructor(private contactServices:ContactFormService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    if(this.contactForm.valid){
      this.send = true;
      const contact = {
        name: this.contactForm.get("name")?.value,
        email: this.contactForm.get("email")?.value,
        phone: this.contactForm.get("phone")?.value,
        message: this.contactForm.get("message")?.value
      }
      console.log(contact);
      
      this.contactServices.contactPost(contact).subscribe(resp=>{
        this.response = true;
      }, (error)=>{
        this.errorServidor = true
      })

    }
    
  }

  haveErrorsInputForm(input: string, type: string) {
    return Boolean(
      this.contactForm.get(input)?.hasError(type) && this.contactForm.get(input)?.touched
    );
  }


 



}
