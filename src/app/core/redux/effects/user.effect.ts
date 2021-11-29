import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/features/services/users/users.service';
import { getUserList, searchUsers, setUserListState } from '../actions/user.actions';


@Injectable()
export class UserEffects {

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(getUserList),
    mergeMap(() => this.usersServices.getAllUsers()
      .pipe(
        map((users:any)=> setUserListState({usersList:users.data}),
        catchError(() => EMPTY)
      ))
    )
  ));

  searchUsers$ = createEffect(() => this.actions$.pipe(
    ofType(searchUsers),
    // tap((searchUsers)=> {console.log(searchUsers.user)}),
    mergeMap( searchUsersAction => this.usersServices.searchUsers(searchUsersAction.user)
      .pipe(
        map((users:any)=> setUserListState({usersList:users.data}),
        catchError(() => EMPTY)
      ))
    )
  ));

  
  
    

  constructor(
    private actions$: Actions,
    private usersServices:UsersService
  ) {}
} 