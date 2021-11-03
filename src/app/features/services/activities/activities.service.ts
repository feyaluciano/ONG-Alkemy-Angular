import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { Activity } from '../../models/Activity';

@Injectable({
  providedIn: "root",
})
export class ActivitiesService {
 

  constructor(private httpService: HttpService,private userStatusService:UserStatusService) {}

  async getActivityById(url: string, id: string):Promise<Activity> {
    this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    const obsActivity$:Observable<Activity> = this.httpService.get(url + id,false);    
    const activityPromise :Promise<Activity> = obsActivity$.toPromise();    
    return  activityPromise;   
  }    
}
