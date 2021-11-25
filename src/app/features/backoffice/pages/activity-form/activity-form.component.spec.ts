import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from 'src/app/app.module';
import { CoreModule } from 'src/app/core/core.module';
import { AuthService } from 'src/app/core/services/auth.service';
import { FeaturesModule } from 'src/app/features/features.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { BackofficeRoutingModule } from '../../backoffice-routing.module';
import { BackofficeModule } from '../../backoffice.module';




import { ActivityFormComponent } from './activity-form.component';


describe('ActivityFormComponent', () => {
  let  _builder:FormBuilder=new FormBuilder();
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
          AuthService
        ]
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


  //ng test --main src/app/features/backoffice/pages/activity-form/activity-form.component.spec.ts
});
