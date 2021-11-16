import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserList } from 'src/app/core/redux/actions/user.actions';
import { UserListState } from 'src/app/core/redux/reducers/userReducer.reducer';
import { getUser } from 'src/app/core/redux/selectors/user.selector';
import { User } from 'src/app/features/models/User';

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
  userList$: Observable<User[] | null> ;
  
  
  constructor(private store:Store<UserListState>) { 
    this.userList$ = this.store.pipe(select(getUser));
  }

  ngOnInit(){
    this.store.dispatch(getUserList())

    this.userList$.subscribe(resp=>{
      console.log(resp, 'esta es la respuesta')
    })
  } 
 
  

  // Change :List for :User
  deleteUser(){

    // HTTP DELETE
    
    
  }

  // Change :List for :User
  editUser(){

    // Inject Router 
    // navigate(... user.id)
    
    
  }

}
