import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { getUserList, setUserListState } from '../actions/user.actions';


@Injectable()
export class UserEffects {

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(getUserList),
    mergeMap(() => this.userServices.getUsers()
      .pipe(
        map((users:any)=> setUserListState({usersList:users.data}),
        catchError(() => EMPTY)
      ))
    )
  ));

  constructor(
    private actions$: Actions,
    private userServices:UserService
  ) {}
} 