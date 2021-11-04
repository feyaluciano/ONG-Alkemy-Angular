import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { environment } from 'src/environments/environment';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';
import { ActivitiesService } from '../../services/activities/activities.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class PrivateBackofficeService {

  private urlApi: string = environment.apiUrl;

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

  createData<T>( params:string, data: User):Observable<T>{
    // modificar headers
    return this.httpService.post<T>(`${ this.urlApi}${ params }` , data, true);
  }

  updateData<T>( params: string, user: User):Observable<T>{
    // modificar headers
    return this.httpService.put<T>(`${this.urlApi}${ params }`, user, true);
  }

  deleteDataById<T>( params: string):Observable<T>{
    //modificar headers
    return this.httpService.delete<T>( params, true);
  }
}
