import { Action, createReducer, on } from '@ngrx/store';

import { logInSuccess } from './auth/auth.actions';

const initialState = false;

const _loginReducer = createReducer(
    initialState,
    on(logInSuccess, (state) => state = true)
);

export const loginReducer = (state: boolean, action: Action): any => {
    return _loginReducer(state, action);
};
