import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';
import { Category } from '../../models/category.model';
@Injectable({
  providedIn: 'root'
})
export class PrivateBackofficeService {

constructor(private httpService:HttpService,private userStatusService:UserStatusService) {}

async getActivityById(url: string, id: string):Promise<HTTPResponse<Activity>> {
    this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    const obsActivity$:Observable<HTTPResponse<Activity>> = this.httpService.get(url + id,false);    
    const activityPromise :Promise<HTTPResponse<Activity>> = obsActivity$.toPromise();    
    return  activityPromise;   
  }  
  
  createCategory(url: string, category: Category): Observable<HTTPResponse<Category>> {
    this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    return this.httpService.post(url, category, true);
  }

}
