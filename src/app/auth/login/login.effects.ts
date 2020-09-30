import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';

import { logIn } from '../auth.actions';
import { ApiService } from '../../core/api.service';

@Injectable()
export class LoginEffect {

    loggedInUser$ = createEffect(() => { return this.action$.pipe(
        ofType(logIn),
        mergeMap((action) => this.api.login('/login', action.credential)
            .pipe(
                map(() => ({type: '[Auth API] LogIn Sucess'}),
                catchError(() => EMPTY)
            )
        )
    ));
  }
);

    constructor(
        private action$: Actions,
        private api: ApiService
    ) {}
}
