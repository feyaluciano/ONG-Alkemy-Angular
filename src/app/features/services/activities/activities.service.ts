import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { Activity } from '../../models/Activity';

@Injectable({
  providedIn: "root",
})
export class ActivitiesService {
 

  constructor(private httpService: HttpService,private userStatusService:UserStatusService) {}

  async getActivityById(url: string, id: string) {
    this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    const obsActivity$ = this.httpService.get(url + id,false);    
    const activityPromise = await obsActivity$.toPromise();    
    return  activityPromise;   
  }    
}
