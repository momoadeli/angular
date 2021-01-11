import { Action } from '@ngrx/store';

import { Login } from '../../login.interface';

export enum ActionTypes {
    LOGIN_FORM_UPDATE = '[My Feature] Login Form Update'
}

export class LoginFormUpdate implements Action {
    readonly type: ActionTypes.LOGIN_FORM_UPDATE = ActionTypes.LOGIN_FORM_UPDATE;
    constructor(public payload: {login: Login }) { }
}

export type Actions =
    | LoginFormUpdate;
