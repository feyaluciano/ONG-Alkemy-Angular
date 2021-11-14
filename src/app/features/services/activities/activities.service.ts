import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';
import { PublicService } from '../../public/services/public.service';

@Injectable({
  providedIn: "root",
})
export class ActivitiesService { 
  constructor(
    private privateBackofficeService: PrivateBackofficeService,
    private userStatusService:UserStatusService,
    private publicService: PublicService
  ) {}

  getActivityById(url:string,id:string):Observable<HTTPResponse<Activity>> {  
    return this.privateBackofficeService.getEntityById(url,id);
  }    

  getActivities(param: string): Observable<HTTPResponse<Activity[]>> {
    return this.publicService.getEntities(param);
  }
  //Este metodo lo cree porque la peticion a la api me deveulve un objeto HTTPResponse<Activity[]>
  //y yo solo quiero manejar el estado de Activity[].
  //entonces con el operator map, tomo la respuesta y devuelvo un obs pero cuyos datos son un array de Activity
  //Tuve que hacerlo aca porque en el efects, me daba error
  getActivitiesSinResponse(param: string): Observable<Activity[]> {
    let ent:Observable<HTTPResponse<Activity[]>>=this.publicService.getEntities(param);    
    return ent
    .pipe(
      map((ev) => ev.data))        
    ;
  }


  
  createActivity(url: string,activity:Activity): Observable<HTTPResponse<Activity>> {
    return this.privateBackofficeService.createEntity(url, activity);
  }
  createActivitySinResponse(url: string,activity:Activity): Observable<Activity> {    
    let ent:Observable<HTTPResponse<Activity>>=this.publicService.createEntity(url,activity);    
    return ent
    .pipe(
      map((ev) => ev.data))        
    ;
  }

  updateActivity(url: string,activity:Activity): Observable<HTTPResponse<Activity>> {
    return this.privateBackofficeService.updateEntity(url, activity);
  }
}
