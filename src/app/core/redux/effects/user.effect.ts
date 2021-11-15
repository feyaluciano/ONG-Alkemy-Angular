import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import { findAlluserSuccess, userState } from '../actions/user.actions';


@Injectable()
export class UserEffects {
  users:any;

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(userState),
    mergeMap(() => this.userServices.getUsers()
      .pipe(
        map((users:any)=> findAlluserSuccess({payload:users}),
        catchError(() => EMPTY)
      ))
    )
  ));

  constructor(
    private actions$: Actions,
    private userServices:UserService
  ) {}
} 