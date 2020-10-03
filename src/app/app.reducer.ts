import { createReducer, on } from '@ngrx/store';

import { afterLoginRequest } from './auth/auth.actions';

const initialState = {isLoggedIn: '0'};

export const loginReducer = createReducer(
    initialState,
    on(afterLoginRequest, (state, {response}) => ({...state, isLoggedIn: response}) )
);
