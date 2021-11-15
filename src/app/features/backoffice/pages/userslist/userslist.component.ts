import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface List {
  name: string;                                       
  email: string;
  id: number; 
}

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  users:any;
  userState$: Observable<any[]> = this.store.select(state => state.userState) ;

 

  constructor(private store:Store<{userState:any[]}>) { 
  }

  ngOnInit(){
    console.log(this.userState$, 'este es el estado')
    this.store.dispatch({ type: '[User Page] Load User' });
  } 
 
  

  // Change :List for :User
  deleteUser(user:List, index: number){

    // HTTP DELETE
    
    
  }

  // Change :List for :User
  editUser(user: List){

    // Inject Router 
    // navigate(... user.id)
    
    
  }

}
