import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppModule } from 'src/app/app.module';
import { CoreModule } from 'src/app/core/core.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { FeaturesModule } from 'src/app/features/features.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BackofficeRoutingModule } from '../../backoffice-routing.module';
import { BackofficeModule } from '../../backoffice.module';


//https://medium.com/@jorgeucano/introducci%C3%B3n-al-testing-en-angular-da415ef8c47

import { ActivityFormComponent } from './activity-form.component';




describe('ActivityFormComponent', () => {
  let  _builder:FormBuilder=new FormBuilder();
let idActivityInRoute:string;

  const activatedRouteSpy = {
    snapshot: {
      paramMap: convertToParamMap({
        idActivity: '1',       
      })
    }
  };

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
                  idActivity: '1'
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

  it('should have a parameter idActivity',  async() => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance; 
    componentAct.route.params.subscribe((params) => {
      idActivityInRoute = params.idActivity;
     expect(idActivityInRoute).toMatch(/^([0-9])*$/);
  });


    // componentAct.route.snapshot.params.get('idActivity').then((data:string)=>{
    //   console.error("daaaaaaaa"+data)
    // })

    //componentAct.route.snapshot.queryParamMap.get('id');

//     const idActivity=Number(componentAct.route.snapshot.params.get('idActivity'))
// const idd=1;
//     //expect(componentAct.route.snapshot.paramMap.get('idActivity')).toEqual(jasmine.any(Number));
//     tick();
//    // expect(componentAct.route.snapshot.paramMap.get('idActivity')).toMatch(/\d{1,}/);  
// console.log("xxxxxxxxxx"+componentAct.route.snapshot.params.get('idActivity'))
//    expect(typeof componentAct.route.snapshot.paramMap.get('idActivity')).toEqual('number');
   //expect(componentAct.route.snapshot.paramMap.get('idActivity')).toBeGreaterThan(0);

    //expect(  componentAct.routeIs.snapshot.params["idActivity"].toBeDefined()   );      
  });


  // it('should have a parameter idActivity and to be a number',  async() => {
  //   const fixture = TestBed.createComponent(ActivityFormComponent);
  //   const componentAct = fixture.componentInstance;     
    
  //   expect(  (componentAct.routeIs.snapshot.params["idActivity"].toBeDefined()) &&  (componentAct.routeIs.snapshot.params["idActivity"].isNumber)   );

  // });


  //ng test --include src/app/features/backoffice/pages/activity-form/activity-form.component.spec.ts

  
  
});



