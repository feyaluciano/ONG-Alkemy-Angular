import { TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { News } from '../../../features/models/news.interface';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { NewsService } from '../../../features/services/news/news.service';
import { ActivatedRoute } from '@angular/router';

describe('FormComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, AppModule],
      declarations: [FormComponent],
      providers: [
        HttpClient,
        AuthService,
        NewsService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: "1052" }),
          },
        },
      ],
    }).compileComponents();
  });

  it("should detect form is valid", async () => {
    const fixture = TestBed.createComponent(FormComponent);
    const componentForm = fixture.componentInstance;
    componentForm.form.get("name")!.setValue("Nueva Novedad");
    componentForm.form.get("content")!.setValue("<p>Texto de nueva novedad</p>");
    componentForm.form.get("image")!.setValue("imagen-en-base-64");
    componentForm.form.get("category_id")!.setValue("1170");
    expect(componentForm.form.invalid).toBeFalse();
  });

  it("should not be able to submit when form is invalid", async () => {
    const fixture = TestBed.createComponent(FormComponent);
    const componentForm = fixture.componentInstance;
    componentForm.form.get("name")!.setValue("");
    componentForm.form.get("content")!.setValue("");
    componentForm.form.get("image")!.setValue("");
    componentForm.form.get("category_id")!.setValue("");
    expect(componentForm.form.valid).toBeFalse();
  });

  it("should be success in a POST request", () => {   
    const fixture = TestBed.createComponent(FormComponent);
    const componentForm = fixture.componentInstance;    
    const news: News = {
      id: undefined,
      name:"newName",
      content:"newContent",
      image:"newImage"
    };       
    componentForm.newsServices.createNews(news)
      .subscribe((res) => {
        expect(res.success).toBeTrue();    
    });
  });

  it("should be success in a PATCH request", () => {   
    const fixture = TestBed.createComponent(FormComponent);
    const componentForm = fixture.componentInstance;    
    const id = '1052';       
    const news: News = {
      id: undefined,
      name:"newName",
      content:"newContent",
      image:"newImage"
    };
    componentForm.newsServices.updateNews(id, news)
      .subscribe((res) => {
        expect(res.success).toBeTrue();    
    });   
  });

  it("on create a new, message should be 'Novedad guardada exitosamente'", () => {       
    const news: News = {
      id: undefined,
      name:"newName",
      content:"newContent",
      image:"newImage"
    };  
    const fixture = TestBed.createComponent(FormComponent);
    const componentForm = fixture.componentInstance; 
    
    componentForm.form.get("name")!.setValue(news.name);
    componentForm.form.get("content")!.setValue(news.content);
    componentForm.form.get("image")!.setValue(news.image);
    componentForm.form.get("category_id")!.setValue('1170');
    componentForm.edit = false;
    componentForm.createNews();        
    expect(componentForm.messageToShow).toEqual("Novedad guardada exitosamente");
       
  });
    
});
