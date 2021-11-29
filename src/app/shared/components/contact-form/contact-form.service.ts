import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  contactData  = [];

  constructor(private http:HttpClient) { 
  
  }

  contactPost(data:any){
   return this.http.post('http://ongapi.alkemy.org/api/contacts', data)
  }




}
