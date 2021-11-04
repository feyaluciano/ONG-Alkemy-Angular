import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';
import { Data } from '../../models/data';

@Injectable({
  providedIn: 'root'
})
export class PrivateBackofficeService {

constructor(private servicesHttp:HttpService) {
 
 }


public putPrivate(endPoint:string, data:Data, authorizacion:boolean){
  if(authorizacion){
    return this.servicesHttp.put(endPoint, data, authorizacion)
  }else{
    return console.log('necesita enviar el token para hacer la peticion')
  }
 }


}

