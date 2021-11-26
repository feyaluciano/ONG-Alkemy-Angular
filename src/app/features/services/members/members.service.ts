import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { HTTPResponse } from '../../models/HTTPResponse';
import { Member } from '../../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  apiUrl: string = environment.apiUrl;
  member: string = '/member'

  constructor( private privateBackofficeService: PrivateBackofficeService ) { }

  getMember(): Observable<HTTPResponse<Member>> {
    return this.privateBackofficeService.getEntities(environment.membersApiUrl);
  }

  /**
   * Returns a specific member
   * @param id 
   * @returns HttpResponse<Member>
   */
  getMemberById(id:string):Observable<HTTPResponse<Member>>{
    
    return this.privateBackofficeService.getEntityById(`${this.apiUrl}${this.member}/`,id);
  }

  /**
   * Create a member
   * @param member 
   * @returns HttpResponse<Member>
   */
  createMember(member:Member):Observable<HTTPResponse<Member>>{
    return this.privateBackofficeService.createEntity(`${this.apiUrl}${this.member}`,member);
  }

  updateMember(id:string, member: Member):Observable<HTTPResponse<Member>>{
    return this.privateBackofficeService.updateEntity(`${this.member}/${id}`,member);
  }

  deleteMember(id: string | undefined): Observable<HTTPResponse<Member>> {
    return this.privateBackofficeService.deleteEntity(`${environment.membersApiUrl}/${id}`);
  }

  searchMembers(text: string): Observable<HTTPResponse<Member[]>> {
    return this.privateBackofficeService.getEntities(environment.membersApiUrl+"?search="+text);
  }

}
