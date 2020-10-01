import { Action, createReducer, on } from '@ngrx/store';

import { afterLoginRequest } from './auth/auth.actions';

const initialState = {isLoggedIn: '0'};

const _loginReducer = createReducer(
    initialState,
    on(afterLoginRequest, (state, {response}) => ({...state, isLoggedIn: response}) )
);

export const loginReducer = (state: any, action: Action): any => {
    return _loginReducer(state, action);
};
