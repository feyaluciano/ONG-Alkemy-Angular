import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getActivitiesA(param: string): Observable<HTTPResponse<Activity[]>> {
    return this.publicService.getEntities(param);
  }

  getActivities(param: string): Observable<Activity[]> {
    return this.publicService.getEntities(param);
  }
  
  createActivity(url: string,activity:Activity): Observable<HTTPResponse<Activity>> {
    return this.privateBackofficeService.createEntity(url, activity);
  }

  updateActivity(url: string,activity:Activity): Observable<HTTPResponse<Activity>> {
    return this.privateBackofficeService.updateEntity(url, activity);
  }



}
