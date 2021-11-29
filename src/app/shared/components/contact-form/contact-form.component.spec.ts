import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormComponent } from './contact-form.component';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('detectar si el formulario es valido', ()=>{
    const fixture = TestBed.createComponent(ContactFormComponent);
    const componentContact = fixture.componentInstance;
    componentContact.contactForm.get("name")!.setValue("josef"); 
    componentContact.contactForm.get("email")!.setValue("jose@gmail.com");
    componentContact.contactForm.get("phone")!.setValue("985202334");
    componentContact.contactForm.get("message")!.setValue("message anythings");
    expect(componentContact.contactForm.invalid).toBeFalse();

  })

  it('No enviar el formulario sino se completo', ()=>{
    const fixture = TestBed.createComponent(ContactFormComponent);
    const  componentContact = fixture.componentInstance;
    componentContact.contactForm.get("name")!.setValue("");
    componentContact.contactForm.get("email")!.setValue("");
    componentContact.contactForm.get("phone")!.setValue("");
    componentContact.contactForm.get("message")!.setValue("");
    expect( componentContact.send).toBeFalse();
  })

  it('probar la correcta peticion http', ()=>{
    const fixture = TestBed.createComponent(ContactFormComponent);
    const  componentContact = fixture.componentInstance;

    
  })
});
