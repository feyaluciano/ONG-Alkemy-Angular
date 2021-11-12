import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "../../services/auth.service";
import { login, setAuthState } from '../actions/auth.actions';

import { catchError, exhaustMap, map } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';




@Injectable()
export class AuthEffects {

    login$ = createEffect(() =>
    this.actions$.pipe(
        ofType(login),
        exhaustMap( action =>
            this.authService.auth({
                email: action.email,
                password: action.password
            }).pipe(
                map( (user:any) => setAuthState({
                    success: user.success,
                    data: user.data.user,
                    token: user.data.token
                })),
                catchError( ()=> EMPTY )
            ))
    ));

    constructor(private actions$: Actions, private authService: AuthService ){

    }
}