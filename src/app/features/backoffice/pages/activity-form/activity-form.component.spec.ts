import { CommonModule } from "@angular/common";
import { HttpClient, HttpResponse, HttpXhrBackend } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
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
  let activityService: ActivitiesService;
  let httpClient: HttpClient;
  let backofficeService: PrivateBackofficeService;
  let publicService: PublicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, AppModule],
      declarations: [ActivityFormComponent],
      providers: [
        HttpClient,
        AuthService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ idActivity: "22" }),
            snapshot: {
              parent: {
                params: {
                  idActivity: "22",
                },
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


ESTE MOCK ESTA BIEN, PERO HAY Q PASARSELO AL SERVICIO ACTIVITIESSERVICE (ESTE PASARLO EN TestBed.configureTestingModule)
  let mockService = {
    createEntity: (activity: Activity) => {
      let act: Activity = {id: "872"};
      let anActivity:Observable<HTTPResponse<Activity>> =
       of({
        success: true,
        message: " ",
        data: act,
      }); 
      return anActivity;
    },
    updateEntity: (activity: Activity) => {
      let act: Activity = {id: "872"};
      let anActivity:Observable<HTTPResponse<Activity>> =
       of({
        success: true,
        message: " ",
        data: act,
      }); 
      return anActivity;
    },
    getEntityById: (id: string) => {
      let act: Activity = {id: "872"};
      let anActivity:Observable<HTTPResponse<Activity>> =
       of({
        success: true,
        message: " ",
        data: act,
      }); 
      return anActivity;
    }


  }
  
  
  
  it("should have a parameter idActivity and tobe a number", async () => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;
    componentAct.route.params.subscribe((params) => {
      idActivityInRoute = params.idActivity;
      expect(idActivityInRoute).toMatch(/^([0-9])*$/);
    });
  });

  
  
  it("should create", () => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const appAct = fixture.componentInstance;
    expect(appAct).toBeTruthy();
  });

  
  
  
  it("should detect form is valid and and the user can send form  ", async () => {
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;
    componentAct.form.get("name")!.setValue("sdfsdf");
    componentAct.form.get("description")!.setValue("sasdasdasdAAs%123456");
    componentAct.form.get("image")!.setValue("imagen-en-base-64");
    expect(componentAct.form.invalid).toBeFalse();
  });

  
  
  
  it("should return expected activity with real service", async () => {
    httpClient = new HttpClient(
      new HttpXhrBackend({ build: () => new XMLHttpRequest() })
    );
    let httpService = new HttpService(httpClient);
    publicService = new PublicService(httpService);
    backofficeService = new PrivateBackofficeService(httpService);
    activityService = new ActivitiesService(backofficeService, publicService);
    const req = backofficeService
      .getEntityById("http://ongapi.alkemy.org/api/activities", "888")
      .toPromise();
    const res = await req;
    let activity: HTTPResponse<Activity> = JSON.parse(JSON.stringify(res));
    expect(activity.success).toBeTrue();
  });

   
  
  ESTO ESTA MAL, ACA ESTOT TESTEANDO EL SERVICIO, TENGO Q TESTEAR EL COMPONENTE, POR ESO TENGO Q MOCKEAR
  LOS SERVICIOS NECESARIOS Y EJECUTAR GETBYiD PERO SOBRE EL COMPONENTE
  it("should be success in a get request", () => {          
    mockService.getEntityById("872").subscribe((res) => {
      let activity: HTTPResponse<Activity> = JSON.parse(JSON.stringify(res));
      expect(activity.success).toBeTrue();
    })   
  });


  it("should be success in a post request", () => {       
    let act: Activity = {id: "872"};        
    mockService.createEntity(act).subscribe((res) => {
      let activity: HTTPResponse<Activity> = JSON.parse(JSON.stringify(res));
      expect(activity.success).toBeTrue();
    })   
  });


  it("message should be 'La actividad fue agregada correctamente'", () => {       
    let act: Activity = {id: "872"};
    const fixture = TestBed.createComponent(ActivityFormComponent);
    const componentAct = fixture.componentInstance;        
    mockService.createEntity(act).subscribe((res) => {
      let activity: HTTPResponse<Activity> = JSON.parse(JSON.stringify(res));
      expect(componentAct.alertMessage).toBe("La actividad fue agregada correctamente");
    })   
  });


 

});
//ng test --include src/app/features/backoffice/pages/activity-form/activity-form.component.spec.ts
