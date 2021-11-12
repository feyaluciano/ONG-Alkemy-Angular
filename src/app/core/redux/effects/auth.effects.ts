import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { AuthService } from "../../services/auth.service";


@Injectable()
export class AuthEffects {

    

    constructor(private actions$: Actions, private authService: AuthService ){

    }
}