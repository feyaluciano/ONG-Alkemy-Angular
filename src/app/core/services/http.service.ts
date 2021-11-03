import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  private _groupId!: string;
  private _headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this._headers = new HttpHeaders({ Group: this._groupId });
  }

  public getHeaders(){
    return this._headers;
  }

  


  public setHeaders(name:string,value:string){   
    this._headers = new HttpHeaders();
    this._headers=this._headers.append(name,value);    
  }

  public get<T>(url: string, activateHeader:boolean = false ):Observable<T> {    
    return this.http.get<T>(url, activateHeader ? { headers: this._headers }: {});
  }

  

  public put<T>(url: string, data: any, activateHeader:boolean = false ):Observable<T> {
    return this.http.put<T>(url, data, activateHeader ? { headers: this._headers }: {});
  }

  public patch<T>(url: string, data: any, activateHeader:boolean = false ):Observable<T> {
    return this.http.patch<T>(url, data, activateHeader ? { headers: this._headers }: {});
  }

  public delete<T>(url: string, activateHeader:boolean = false ):Observable<T> {   
    return this.http.delete<T>(url, activateHeader ? { headers: this._headers }: {});
  } 

  public post<T>(url: string, data: any, activateHeader:boolean = false ):Observable<T> {
    return this.http.post<T>(url, data, activateHeader ? { headers: this._headers }: {});
  }


}

