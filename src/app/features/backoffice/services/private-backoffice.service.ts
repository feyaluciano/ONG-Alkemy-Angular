import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { environment } from 'src/environments/environment';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';
import { ActivitiesService } from '../../services/activities/activities.service';

@Injectable({
  providedIn: 'root'
})
export class PrivateBackofficeService {

  urlApi: string = environment.apiUrl;

constructor(private activitiesService:ActivitiesService,private userStatusService:UserStatusService, private httpService: HttpService) {}

 getActivityById(url:string,id:string):Promise<HTTPResponse<Activity>> {  
    return this.activitiesService.getActivityById(url,id);
  }
  

  /** HTTP USERS */
  getAll<T>( params:string ):Observable<T>{
    return this.httpService.get<T>(`${this.urlApi}${ params }`);
  }

  getById<T>( params:string , id:number ):Observable<T>{
    return this.httpService.get<T>(`${this.urlApi}${ params }/${ id }`);
  }
}
