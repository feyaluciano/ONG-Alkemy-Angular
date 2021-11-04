import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Data } from '../../models/data';
import { Observable } from 'rxjs';
import { UserStatusService } from 'src/app/core/services/user-status.service';
import { Activity } from '../../models/Activity';
import { HTTPResponse } from '../../models/HTTPResponse';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrivateBackofficeService {

  constructor(private httpService:HttpService,private userStatusService:UserStatusService) {}


public putPrivate(url:string, id:string,  data:Data, authorizacion:boolean):Observable<HttpResponse<Activity>>{
 this.httpService.setHeaders("Authorization", this.userStatusService.getHeaders());         
    return this.httpService.put(url+'/'+id , data, true )
  
 }


 getActivityById(url: string, id: string):Observable<HTTPResponse<Activity>> {
    this.httpService.setHeaders("Authorization", this.userStatusService.getHeaders());
    return  this.httpService.get(url + id,false);              
  }    

}

