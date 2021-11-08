import { Injectable } from '@angular/core';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HTTPResponse } from '../../models/HTTPResponse';
import { News } from '../../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl: string = environment.apiUrl;
  news: string = '/news'

  constructor( private privateBackofficeService: PrivateBackofficeService ) { }

  /**
   * Returns a specific news
   * @param id 
   * @returns HttpResponse<News>
   */
  getNewsById(id:string):Observable<HTTPResponse<News>>{
    
    return this.privateBackofficeService.getEntityById(`${this.apiUrl}${this.news}/`,id);
  }

  /**
   * Create a news
   * @param news 
   * @returns HttpResponse<News>
   */
  createNews(news:News):Observable<HTTPResponse<News>>{
    return this.privateBackofficeService.createEntity(`${this.apiUrl}${this.news}`,news);
  }

  updateNews(id:string, news: News):Observable<HTTPResponse<News>>{
    return this.privateBackofficeService.updateEntity(`${this.apiUrl}${this.news}/${id}`,news);
  }
}
