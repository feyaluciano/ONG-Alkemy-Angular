import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserList } from 'src/app/core/redux/actions/user.actions';
import { UserListState } from 'src/app/core/redux/reducers/userReducer.reducer';
import { getUser } from 'src/app/core/redux/selectors/user.selector';
import { User } from 'src/app/features/models/User';
import Swal from 'sweetalert2';
import { UsersService } from '../../../services/Users/users.service';

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
  loader:boolean=true;
  totalCount:number = 10;
  userList$: Observable<User[] | null> ;
  
  
  constructor(
    private store:Store<UserListState>,
    private router: Router,
    private usersSvc: UsersService
  ) { 
    this.userList$ = this.store.pipe(select(getUser));
  }

  ngOnInit(){
    this.store.dispatch(getUserList())
    setTimeout(()=>{
      this.loader = false;
    },2000);
  }

  editUser(id: number | undefined) {
    this.router.navigate(['/users', id]);
  }

  deleteUser(id: number | undefined) {
    this.usersSvc.deleteUserById(id)
      .subscribe((resp: any) => {
        
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: resp.message,
          showConfirmButton: true
        });

        // TODO: Update userList$
        
      },
      (error: any) => {
        // TODO: Handle errors
      },
      () => { });
  }
    
} 
 



