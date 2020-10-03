import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { logIn, afterLoginRequest } from '../auth.actions';
import { ApiService } from '../../core/api.service';

@Injectable()
export class LoginEffect {

    constructor(
        private action$: Actions,
        private api: ApiService
    ) {}

    @Effect()
    loggedInUser$ = this.action$.pipe(
            ofType(logIn),
            mergeMap((action) => this.api.login('/login', action.credentials)
                .pipe(
                    map((resp: string) => (afterLoginRequest({response: resp}))),
                    catchError(() => EMPTY)
                )
        )
    );

}
