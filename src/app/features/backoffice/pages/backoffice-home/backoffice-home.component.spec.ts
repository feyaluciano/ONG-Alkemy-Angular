import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackofficeHomeComponent } from './backoffice-home.component';

describe('BackofficeHomeComponent', () => {
  let component: BackofficeHomeComponent;
  let fixture: ComponentFixture<BackofficeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackofficeHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackofficeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
