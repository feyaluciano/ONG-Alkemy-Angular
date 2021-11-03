import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/core/services/http.service';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class NewsUsersService {

  private url: string = 'http://ongapi.alkemy.org/api/users';

  constructor( private http: HttpClient, private httpService: HttpService ) { }

  /** USERS */

  // GET    -> Get a listing of the Users
  getAllUsers(){
    return this.httpService.get(this.url);
  }

  // GET    -> Display the specified User
  getUserById(id:number){    
    this.httpService.get(`${this.url}/${id}`);
  }

  // DELETE -> Remove the specified User from storage
  deleteUserById(id:number){
    return this.httpService.delete(`${this.url}/${id}`);
  }








  /** ESPERANDO QUE SE RESUELVAN LOS PROBLEMAS DE LA API */
  // POST   -> Store a newly created User in storage
  createUser(user:User){   

    // ESTA FUNCIÓN DEVUELVE LOS DATOS DEL OBJETO RECIBIDO
    // Y HARDCODEA DE FORMA FALSA OTROS DATOS
    // SIMULA UNA DEVOLUCIÓN DE LA API
    // NO SE PUEDE SUBSCRIBIR A LA FUNCIÓN    

    return {
      success: true,
      data: {
        id: 999,
        name: user.name,
        email: user.email,
        email_verified_at: null,
        password: user.password,
        role_id: user.role_id,
        remember_token: null,
        created_at: "2021-07-09T04:12:44.000000Z",
        updated_at: "2021-07-09T04:12:44.000000Z",
        deleted_at: null,
        group_id: null,
        latitude: null,
        longitude: null,
        address: null,
        profile_image: user.profile_image,
        description: user.description
      },
      message: "Usuario creado con éxito!"
    };
  }
  
  // PUT    -> Update the specified User in storage
  updateUserById(id:number, user:User){
    //return this.httpService.put(`${this.url}/${id}`, data);
    return {
      success: true,
      data: {
        id: id,
        name: user.name,
        email: user.email,
        email_verified_at: null,
        password: user.password,
        role_id: user.role_id,
        remember_token: null,
        created_at: "2021-07-09T04:12:44.000000Z",
        updated_at: 'Actualizado',
        deleted_at: null,
        group_id: null,
        latitude: null,
        longitude: null,
        address: null,
        profile_image: user.profile_image,
        description: user.description
      },
      message: "Usuario actualizado con éxito!"
    };
  }

  

  

}
