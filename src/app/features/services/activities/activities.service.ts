import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
    private publicService: PublicService
  ) {}

  getActivityById(url:string,id:string):Observable<HTTPResponse<Activity>> {  
    return this.privateBackofficeService.getEntityById(url,id);
  }    

  getActivities(): Observable<HTTPResponse<Activity[]>> {
    return this.publicService.getEntities(environment.activitiesApiUrl);
  }


  
  createActivity(url: string,activity:Activity): Observable<HTTPResponse<Activity>> {
    return this.privateBackofficeService.createEntity(url, activity);
  }

  updateActivity(url: string,activity:Activity): Observable<HTTPResponse<Activity>> {
    return this.privateBackofficeService.updateEntity(url, activity);
  }



}
