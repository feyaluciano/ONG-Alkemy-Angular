import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { HTTPResponse } from '../../models/HTTPResponse';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(
    private privateBackofficeService: PrivateBackofficeService
  ) { }

  newContact(url: string, contact: Contact): Observable<HTTPResponse<Contact>> {
    return this.privateBackofficeService.createEntity(url, contact);
  }
}
