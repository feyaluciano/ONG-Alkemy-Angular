import { Injectable } from '@angular/core';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
import { news } from '../../models/news';
import { PublicService } from '../../public/services/public.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private publicServices:PublicService, private privateServices:PrivateBackofficeService) { }

  //news
  getNews(){
    return this.publicServices.getEntities('/news')
  }

  getNewsById(id:number){
    return this.publicServices.getEntities(`/news/${id}`)
  }

  postsNews(data:news){
    return this.privateServices.createEntity(`/news/`, data)
  }

  putNews(data:news){
    return this.privateServices.updateEntity(`/news/`,data )
  }

  deleteNews(id:number){
    return this.privateServices.deleteEntity(`/news/${id}`)
  }


//testimonial
  getTestimonial(){
    return this.publicServices.getEntities('/testimonials')
  }

  GetTestimonialById(id:number){
    return this.publicServices.getEntities(`/testimonials/${id}`)
  }

  postsTestimonial(data:any){
    return this.privateServices.createEntity(`/testimonials/`, data)
  }

  putTestimonal(data:any){
    return this.privateServices.updateEntity(`/testimonials/`,data )
  }

  deleteTestimonial(id:number){
    return this.privateServices.deleteEntity(`/testimonials/${id}`)
  }
}
