import { createAction, props } from '@ngrx/store';

export const logIn = createAction('[Request Login] Login Component', props<{credentials: object}>());
export const logInSuccess = createAction('[Auth API] LogIn Success');
export const logInFailed = createAction('[Auth API] LogIn Failed');
export const afterLoginRequest = createAction('[Auth API] After Login Request', props<{response: string} >());

