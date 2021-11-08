import { Injectable } from '@angular/core';
import { Category } from '../../models/category.model';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { Observable } from 'rxjs';
import { HTTPResponse } from '../../models/HTTPResponse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiUrl = environment.apiUrl;
  private categories: string = '/categories';

  constructor(
    private privateBackofficeService: PrivateBackofficeService 
  ) { }

  createCategory(url: string, category: Category): Observable<HTTPResponse<Category>> {
    return this.privateBackofficeService.createEntity(url, category);
  }

  /**
   * Returns all categories
   * @returns HttpResponse<Category>
   */
  getAllCategories():Observable<HTTPResponse<Category[]>>{
    
    return this.privateBackofficeService.getEntities(`${this.apiUrl}${this.categories}`);
  }
}
