import { Injectable } from '@angular/core';
import { PrivateBackofficeService } from '../../backoffice/services/private-backoffice.service';
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

  postsNews(data:any){
    return this.privateServices.createEntity(`/news/${data}`)
  }

  putNews(){

  }

  deleteNews(){

  }


//testimonial
  getTestimonial(){

  }

  GetTestimonialById(){

  }

  postsTestimonial(){

  }

  putTestimonal(){

  }

  deleteTestimonial(){

  }
}
