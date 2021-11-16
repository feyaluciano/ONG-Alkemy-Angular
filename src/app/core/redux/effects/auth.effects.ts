import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { AuthService } from "../../services/auth.service";
import { login, register, setAuthState } from '../actions/auth.actions';

import { catchError, exhaust, exhaustMap, map, mergeMap, tap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { HTTPResponse } from '../../../features/models/HTTPResponse';
import { User } from '../../../features/models/User';
import { Router } from '@angular/router';




@Injectable()
export class AuthEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType(login),
        exhaustMap( loginAction =>
            this.authService.auth({email:loginAction.email, password: loginAction.password}).pipe(
                map( (resp:any) => setAuthState({success: resp.success, token: resp.data.token, data: resp.data.user}))
            ))            
    ));

    register$ = createEffect(() => this.actions$.pipe(
        ofType(register),
        exhaustMap( registerAction =>
            this.authService.auth({name: registerAction.name,email:registerAction.email, password: registerAction.password}).pipe(
                map( (resp:any) => setAuthState({success: resp.success, token: resp.data.token, data: resp.data.user}))
            ))            
    ));

    

    constructor(private actions$: Actions, private authService: AuthService, private router: Router ){

    }
}