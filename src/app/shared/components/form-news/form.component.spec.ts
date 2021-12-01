import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { News } from '../../../features/models/news.interface';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/core/services/auth.service';
import { NewsService } from '../../../features/services/news/news.service';
import { ActivatedRoute } from '@angular/router';
import { HTTPResponse } from 'src/app/features/models/HTTPResponse';

describe('FormComponent', () => {

  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  // let services: NewsService;
  // let httpClientSpy: {post: jasmine.Spy, put: jasmine.Spy};
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, AppModule],
      declarations: [FormComponent],
      providers: [
        HttpClient,
        AuthService,
        { provide: NewsService, useValue: FakeNewsService},
        // NewsService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: "1052" }),
          },
        },
      ],
    }).compileComponents();
  });

  let FakeNewsService = {
    createNews: (news: News) => {
      let aNew = of({
        "success":true,
        "data": {news},
        "message": "New saved successfully"
      });
      return aNew;
    },

    updateNews: (id: string, news: News) => {
      let aNew = of({
        "success":true,
        "data": {
          "id": id,
          "news": news
        },
        "message": "New edited successfully"
      });
      return aNew;
    }
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // httpClientSpy = jasmine.createSpyObj('http', ['post', 'put']);
    // services = new NewsService(httpClientSpy as any)
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

  it("should be success in a POST request", (done: DoneFn) => {   
    const fixture = TestBed.createComponent(FormComponent);
    const componentForm = fixture.componentInstance;    

    const news: News = {
      "name":"newName",
      "content":"newContent",
      "image":"newImage"
    };

    const mockNew = {
      "success":true,
      "data": {
        "name": "newName",
        "content": "NewContent",
        "image": "newImage"
      },
      "message": "New saved successfully"
    };
    
    const spy = spyOn<any>(componentForm["newsServices"], "createNews").and.returnValue(of({mockNew}));
    componentForm["newsServices"].createNews(news)
      .subscribe((res) => {
        expect(res["success"]).toBe(true);
        done();    
    });  
    // httpClientSpy.post.and.returnValue(of(mockNew));
    // services.createNews(news)
    //   .subscribe((res) => {
    //     expect(res.success).toBeTrue();  
    //     done();  
    // });
  });

  it("should be success in a PATCH request", (done: DoneFn) => {   
    const fixture = TestBed.createComponent(FormComponent);
    const componentForm = fixture.componentInstance;    
    const id = '1052';       
    const news: News = {
      "name":"newName",
      "content":"newContent",
      "image":"newImage"
    };

    const data = {
      "success":true,
      "data": {
        "name": "newName",
        "content": "NewContent",
        "image": "newImage"
      },
      "message": "New edited successfully"
    };

    const spy = spyOn<any>(componentForm["newsServices"], "updateNews").and.returnValue(of({data}));
    componentForm["newsServices"].updateNews(id, news)
      .subscribe((res) => {
        expect(res["success"]).toBe(true);
        done();    
    }); 

    // httpClientSpy.put.and.returnValue(of({
    //   success:true,
    //   data: {
    //     id: "1052",
    //     name: "newName",
    //     content: "NewContent",
    //     image: "newImage"
    //   },
    //   message: "New edited successfully"
    // }));
    
    // services.updateNews(id, news)
    //   .subscribe((res) => {
    //     expect(res.success).toBeTrue();
    //     done();    
    // });   
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
