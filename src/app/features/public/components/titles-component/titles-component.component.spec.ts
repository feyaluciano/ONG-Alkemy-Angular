import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlesComponentComponent } from './titles-component.component';

describe('TitlesComponentComponent', () => {
  let component: TitlesComponentComponent;
  let fixture: ComponentFixture<TitlesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitlesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitlesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
