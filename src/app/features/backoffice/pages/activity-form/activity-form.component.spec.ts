import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import {  of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { AuthService } from 'src/app/core/services/auth.service';

//https://medium.com/@jorgeucano/introducci%C3%B3n-al-testing-en-angular-da415ef8c47

import { ActivityFormComponent } from './activity-form.component';
describe('ActivityFormComponent', () => {
  
let idActivityInRoute:string;

  

    beforeEach((() => {
      TestBed.configureTestingModule({
        imports: [
          CommonModule,
          AppModule
        ],
        declarations: [
          ActivityFormComponent
        ],
        providers: [
          AuthService,         
          {
          provide: ActivatedRoute, useValue: {
            params: of({ idActivity: '22' }),
            snapshot: {
              parent: {
                params: {
                  idActivity: '22'
                }
              },
              paramMap: {
                get(idActivity: string): string {
                  return '';
                }
              }
            },
          }
        }
      
      ],        
      }).compileComponents();
    }));  
   it('should have a parameter idActivity and tobe a number',  async() => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance; 
    componentAct.route.params.subscribe((params) => {
      idActivityInRoute = params.idActivity;
     expect(idActivityInRoute).toMatch(/^([0-9])*$/);
  });
  });
    
    
  it('should create', () => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const appAct = fixture.componentInstance;
    expect(appAct).toBeTruthy();
  });

  it('should detect form is valid and and the user can send form  ', async () => { 
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;
    componentAct.form.get("name")!.setValue("asasasas");
    componentAct.form.get("description")!.setValue("sasdasdasdAAs%123456");
    componentAct.form.get("image")!.setValue("imagen-en-base-64");  
    expect(componentAct.form.invalid).toBeFalse();
  });

  
  
  //ng test --include src/app/features/backoffice/pages/activity-form/activity-form.component.spec.ts    
});



