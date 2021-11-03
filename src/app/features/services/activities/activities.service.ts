import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';

@Injectable({
  providedIn: "root",
})
export class ActivitiesService { 
  constructor(private privateBackofficeService: PrivateBackofficeService,private userStatusService:UserStatusService) {}

  getActivityById(url:string,id:string):Observable<HTTPResponse<Activity>> {  
    return this.privateBackofficeService.getActivityById(url,id);
  }    
}
