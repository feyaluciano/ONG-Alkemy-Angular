import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberFinderComponent } from './member-finder.component';

describe('MemberFinderComponent', () => {
  let component: MemberFinderComponent;
  let fixture: ComponentFixture<MemberFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
