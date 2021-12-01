import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { HTTPResponse } from '../../models/HTTPResponse';
import { News } from '../../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl: string = environment.apiUrl;
  news: string = '/news'

  constructor( private privateBackofficeService: PrivateBackofficeService ) { }

  getNews(): Observable<HTTPResponse<News>> {
    return this.privateBackofficeService.getEntities(environment.newsApiUrl);
  }

  /**
   * Returns a specific news
   * @param id 
   * @returns HttpResponse<News>
   */
  getNewsById(id:string):Observable<HTTPResponse<News>>{
    
    return this.privateBackofficeService.getEntityById(environment.newsApiUrl,id);
  }

  /**
   * Create a news
   * @param news 
   * @returns HttpResponse<News>
   */
  createNews(news:News):Observable<HTTPResponse<News>>{
    return this.privateBackofficeService.createEntity(environment.newsApiUrl,news);
  }

  updateNews(id:string, news: News):Observable<HTTPResponse<News>>{
    return this.privateBackofficeService.updateEntity(`${this.news}/${id}`,news);
  }

  searchNews(text: string): Observable<HTTPResponse<News[]>> {
    return this.privateBackofficeService.getEntities(environment.newsApiUrl+"?search="+text);
  }

  deleteNew(id: string | undefined): Observable<HTTPResponse<News>> {
    return this.privateBackofficeService.deleteEntity(`${environment.newsApiUrl}/${id}`);
  }
}
