import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { NewsFormComponent } from './news-form.component';
import { News } from '../../../../models/news.interface';
import { Observable, of } from 'rxjs';
import { HTTPResponse } from 'src/app/features/models/HTTPResponse';
import { ActivatedRoute } from '@angular/router';

describe('NewsFormComponent', () => {
  
  let mockNewsService = {
    getNewById: () => {
      let news: News = {
        id: '1052',
        name: 'newName',
        content: 'newContent',
        image:'newImage'
      };
      let aNew: Observable<HTTPResponse<News>> =
       of({
        success: true,
        message: ' ',
        data: news,
      }); 
      return aNew;
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, AppModule],
      declarations: [NewsFormComponent],
      providers: [
        HttpClient,
        AuthService,
        {
          provide: NewsFormComponent,
          useValue: mockNewsService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1052' }),
          },
        },
      ],
    }).compileComponents();
  });



  
  it('should create', () => {
    const fixture = TestBed.createComponent(NewsFormComponent);
    const appNew = fixture.componentInstance;
    expect(appNew).toBeTruthy();
  });
  
  it('should have a parameter id and tobe a number', async () => {
    const fixture = TestBed.createComponent(NewsFormComponent);
    const componentNew = fixture.componentInstance;    
    componentNew.activatedRoute.params.subscribe((params) => {
      const idNewInRoute = params.id;
      expect(idNewInRoute).toMatch(/^[0-9]*$/);
    });
  });
});
