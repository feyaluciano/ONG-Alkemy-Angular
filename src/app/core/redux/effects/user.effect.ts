import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';


@Injectable()
export class UserEffects {
  users:any;

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType('[User Page] Load User'),
    mergeMap(() => this.userServices.getUsers()
      .pipe(
        map((users:any)=> ({ type: '[User API] User Loaded Success', users: users.data })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private userServices:UserService
  ) {}
} 