import { CommonModule } from "@angular/common";
import { HttpClient, HttpResponse, HttpXhrBackend } from "@angular/common/http";
import { TestBed, tick } from "@angular/core/testing";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, convertToParamMap } from "@angular/router";
import { Observable, of } from "rxjs";
import { AppModule } from "src/app/app.module";
import { AuthService } from "src/app/core/services/auth.service";
import { HttpService } from "src/app/core/services/http.service";
import { Activity } from "src/app/features/models/Activity";
import { HTTPResponse } from "src/app/features/models/HTTPResponse";
import { PublicService } from "src/app/features/public/services/public.service";
import { ActivitiesService } from "src/app/features/services/activities/activities.service";
import { PrivateBackofficeService } from "../../services/private-backoffice.service";

//https://medium.com/@jorgeucano/introducci%C3%B3n-al-testing-en-angular-da415ef8c47

import { ActivityFormComponent } from "./activity-form.component";

//Esta función agrupa testeos segun su funcionalidad
describe("ActivityFormComponent", () => {
  let idActivityInRoute: string;
  let httpClientSpy: { post: jasmine.Spy };
  let realActivityService: ActivitiesService;
  let httpClient: HttpClient;
  let backofficeService: PrivateBackofficeService;
  let publicService: PublicService;



  

  let mockActivityService = {
    createActivity: (activity: Activity) => {
      let act: Activity = {id: "872",name:"aname",description:"adesc",image:"animage"};
      let anActivity:Observable<HTTPResponse<Activity>> =
       of({
        success: true,
        message: " ",
        data: act,
      }); 
      return anActivity;
    },
    updateActivity: (activity: Activity) => {
      let act: Activity = {id: "872"};
      let anActivity:Observable<HTTPResponse<Activity>> =
       of({
        success: true,
        message: " ",
        data: act,
      }); 
      return anActivity;
    },
    getActivityById: (id: string) => {
      let act: Activity = {id: "872",name:"aname",description:"adesc",image:"animage"};
      let anActivity:Observable<HTTPResponse<Activity>> =
       of({
        success: true,
        message: " ",
        data: act,
      }); 
      return anActivity;
    }


  }


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, AppModule],
      declarations: [ActivityFormComponent],
      providers: [
        HttpClient,
        AuthService,
        {
          provide:ActivitiesService,
          useValue: mockActivityService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ idActivity: "22" }),
            snapshot: {              
                params: {
                  idActivity: "22",
                },
              
              paramMap: {
                get(idActivity: string): string {
                  return "";
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
  });



  
  it("should create", () => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const appAct = fixture.componentInstance;
    expect(appAct).toBeTruthy();
  });
  
  it("should have a parameter idActivity and tobe a number", async () => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;    
    componentAct.route.params.subscribe((params) => {
      idActivityInRoute = params.idActivity;
      expect(idActivityInRoute).toMatch(/^([0-9])*$/);
    });
  });

           
  it("should detect form is valid", async () => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;
    componentAct.form.get("name")!.setValue("sdfsdf");
    componentAct.form.get("description")!.setValue("sasdasdasdAAs%123456");
    componentAct.form.get("image")!.setValue("imagen-en-base-64");
    expect(componentAct.form.invalid).toBeFalse();
  });

  it("should not be able to submit", async () => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;
    componentAct.form.get("name")!.setValue("");
    componentAct.form.get("description")!.setValue("");
    componentAct.form.get("image")!.setValue("");
    expect(componentAct.allowSend).toBeFalse();
  });

      
  it("should return expected activity with real service", async () => {
    httpClient = new HttpClient(
      new HttpXhrBackend({ build: () => new XMLHttpRequest() })
    );
    let httpService = new HttpService(httpClient);
    publicService = new PublicService(httpService);
    backofficeService = new PrivateBackofficeService(httpService);
    realActivityService = new ActivitiesService(backofficeService, publicService);
    const req = backofficeService
      .getEntityById("http://ongapi.alkemy.org/api/activities", "888")
      .toPromise();
    const res = await req;
    let activity: HTTPResponse<Activity> = JSON.parse(JSON.stringify(res));
    expect(activity.success).toBeTrue();
  });

   
  
  
  it("should be success in a get request", () => {          
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;
    componentAct.getActivity();    
    expect(componentAct.resultData.success).toBeTrue();    
  });


  it("should be success in a post request", () => {   
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;    
    let act: Activity = {id: idActivityInRoute};        
    componentAct.activitiesService.createActivity("http://ongapi.alkemy.org/api/activities",act).subscribe((res) => {
        expect(res.success).toBeTrue();    
    })   
  });


  it("should be success in a patch request", () => {   
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;    
    let act: Activity = {id: idActivityInRoute};        
    componentAct.activitiesService.updateActivity("http://ongapi.alkemy.org/api/activities",act).subscribe((res) => {
        expect(res.success).toBeTrue();    
    })   
  });


  it("message should be 'La actividad fue agregada correctamente'", () => {       
    let act: Activity = {id: idActivityInRoute};
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance; 
    
    componentAct.form.get("name")!.setValue("sdfsdf");
    componentAct.form.get("description")!.setValue("sasdasdasdAAs%123456");
    componentAct.form.get("image")!.setValue("imagen-en-base-64");
    componentAct.editing=false;
    
    componentAct.imageError=false;
    componentAct.save();        
    expect("La actividad fue agregada correctamente").toEqual(componentAct.alertMessage);
       
  });


  it("message should be 'La actividad fue editada correctamente'", () => {       
    let act: Activity = {id: idActivityInRoute};
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance; 
    
    componentAct.form.get("name")!.setValue("sdfsdf");
    componentAct.form.get("description")!.setValue("sasdasdasdAAs%123456");
    componentAct.form.get("image")!.setValue("imagen-en-base-64");
    componentAct.editing=true;
    
    componentAct.imageError=false;
    componentAct.save();        
    expect("La actividad fue editada correctamente").toEqual(componentAct.alertMessage);
       
  });




 

});
//ng test --include src/app/features/backoffice/pages/activity-form/activity-form.component.spec.ts

