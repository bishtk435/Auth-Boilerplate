import { createAction, props } from '@ngrx/store';

export const logIn = createAction('[Request Login] Login Component', props<{ payload: object}>());
export const logInSuccess = createAction('[Auth API] LogIn Sucess');
export const logInFailed = createAction('[Auth API] LogIn Failed');
