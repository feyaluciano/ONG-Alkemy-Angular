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
    //this.httpService.setHeaders('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9vbmdhcGkuYWxrZW15Lm9yZ1wvYXBpXC9sb2dpbiIsImlhdCI6MTYzNjAxNzE1NiwiZXhwIjoxNjM2MDIwNzU2LCJuYmYiOjE2MzYwMTcxNTYsImp0aSI6Ik02Q3R5ODdqZHFZcXVqNVoiLCJzdWIiOjc0NSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.jYXHTMlcg6ENwI9E50CeJM0KUvpb0ZT_fZCUbtUPOi8');
    return this.httpService.post<T>(`${ this.urlApi}${ params }` , data, true);
  }
}
