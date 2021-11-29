import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ContactFormComponent } from './contact-form.component';
import { ContactFormService } from './contact-form.service';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;
  let services: ContactFormService;
  let httpclientSpy: {post:jasmine.Spy};

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

  beforeEach(() => {
    httpclientSpy = jasmine.createSpyObj('http', ['post']);
    services = new ContactFormService(httpclientSpy as any)
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

  it('No enviar el formulario sino se completo', ()=>{
    const fixture = TestBed.createComponent(ContactFormComponent);
    const  componentContact = fixture.componentInstance;
    componentContact.contactForm.get("name")!.setValue("");
    componentContact.contactForm.get("email")!.setValue("");
    componentContact.contactForm.get("phone")!.setValue("");
    componentContact.contactForm.get("message")!.setValue("");
    expect( componentContact.send).toBeFalse();
  })

  it('probar la correcta peticion http', (done:DoneFn)=>{

    let contacto = {
      name: 'jose',
      email: 'test@demo.com',
      phone: '985202334',
      message: 'prueba',
      updated_at: "2021-11-29T22:51:42.000000Z",
      created_at: "2021-11-29T22:51:42.000000Z",
    }
    
    const mockContact = 
      {
        "success": true,
        "data": {
            "email": "test@demo.com",
            "name": "jose",
            "phone": "985202334",
            "message": "prueba",
            "updated_at": "2021-11-29T22:51:42.000000Z",
            "created_at": "2021-11-29T22:51:42.000000Z",
        },
        "message": "Contact saved successfully"
    }
        
    httpclientSpy.post.and.returnValue(of(mockContact));

    services.contactPost(contacto).subscribe((resp:any)=>{
      expect(resp.success).toBeTrue();
      done()
    })
  })

});
