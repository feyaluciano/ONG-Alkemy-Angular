import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

constructor(private httpServices:HttpService) { }

public getPublic(url:string, id?:string){
  return this.httpServices.get(url+'/'+id, false  )
}
}
