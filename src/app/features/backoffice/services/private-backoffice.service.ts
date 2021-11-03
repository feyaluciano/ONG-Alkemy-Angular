import { Injectable } from '@angular/core';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { Activity } from '../../models/Activity';
import { ActivitiesService } from '../../services/activities/activities.service';

@Injectable({
  providedIn: 'root'
})
export class PrivateBackofficeService {

constructor(private activitiesService:ActivitiesService,private userStatusService:UserStatusService) {}

 getActivityById(url:string,id:string):Promise<Activity> {  
    return this.activitiesService.getActivityById(url,id);
  }
    
}
