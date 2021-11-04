import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';
@Injectable({
  providedIn: 'root'
})
export class PrivateBackofficeService {

constructor(private httpService:HttpService,private userStatusService:UserStatusService) {}

 getActivityById(url: string, id: string):Observable<HTTPResponse<Activity>> {
    this.httpService.setHeaders("Authorization", this.userStatusService.getHeaders());
    return  this.httpService.get(url + id,false);              
  }    

  createSection<T>(url: string, section: any): Observable<T> {
    this.httpService.getHeaders().append("Authorization", this.userStatusService.getHeaders());
    return this.httpService.post(url, section, true);
  }
}