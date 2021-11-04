import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { Observable } from 'rxjs';
import { HTTPResponse } from '../../models/HTTPResponse';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private privateBackofficeService: PrivateBackofficeService 
  ) { }

  createCategory(url: string, category: Category): Observable<HTTPResponse<Category>> {
    return this.privateBackofficeService.createCategory(url, category);
  }
}
