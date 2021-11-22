import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  constructor(private http:HttpClient) { }

  getRestCountries(){
   return this.http.get('https://restcountries.com/v3.1/all');
  }

  findCountry(country:string){
    return this.http.get('https://restcountries.com/v3.1/name/'+country)
  }
}
