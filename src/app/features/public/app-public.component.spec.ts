/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppPublicComponent } from './app-public.component';

describe('AppPublicComponent', () => {
  let component: AppPublicComponent;
  let fixture: ComponentFixture<AppPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
