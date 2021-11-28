import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsFormComponent } from './news-form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewsFormComponent', () => {

  let component: NewsFormComponent;
  let router: Router;
  let fixture;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ NewsFormComponent ],
      imports: [
        // HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule
        // ... whatever module you have
      ],
      providers:
      [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {params: {id: '1052'}}
          }
        }
      ]
    })
    .compileComponents();

    // router = TestBed.get(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('If ID is provided, set text value', <any>fakeAsync(() => {
    router.navigate(['/backoffice/news', '1052']);
    tick(500);
    expect(component.titlePage).toBe('Formulario Edición de Novedades');
  }));
  // A simple test:
  // it('the sum 1 + 1 should be 2', () => {
  //   expect(1+1).toEqual(2);
  // });
});
