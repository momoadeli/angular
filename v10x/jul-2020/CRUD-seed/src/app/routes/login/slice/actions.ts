import { Action } from '@ngrx/store';
import { User } from '../../../shared/user.interface';

export enum ActionTypes {
    LOGIN_REQUEST = '[My Feature] Login Request',
    LOGIN_FAILURE = '[My Feature] Login Failure',
    LOGIN_SUCCESS = '[My Feature] Login Success',
    LOGOUT_REQUEST = '[My Feature] Logout Request',
    LOGOUT_SUCCESS = '[My Feature] Logout Success',
    LOGOUT_FAILURE = '[My Feature] Logout Failure'
}

export class LoginRequestAction implements Action {
    readonly type: ActionTypes.LOGIN_REQUEST = ActionTypes.LOGIN_REQUEST;
}

export class LoginFailureAction implements Action {
    readonly type: ActionTypes.LOGIN_FAILURE = ActionTypes.LOGIN_FAILURE;
    constructor(public payload: { appHttpError: string }) { }
}

export class LoginSuccessAction implements Action {
    readonly type: ActionTypes.LOGIN_SUCCESS = ActionTypes.LOGIN_SUCCESS;
    constructor(public payload: { user: User }) { }
}

export class LogoutRequestAction implements Action {
  readonly type: ActionTypes.LOGOUT_REQUEST = ActionTypes.LOGOUT_REQUEST;
}

export class LogoutSuccessAction implements Action {
  readonly type: ActionTypes.LOGOUT_SUCCESS = ActionTypes.LOGOUT_SUCCESS;
}

export class LogoutFailureAction implements Action {
  readonly type: ActionTypes.LOGOUT_FAILURE = ActionTypes.LOGOUT_FAILURE;
  constructor(public payload: { appHttpError: string }) { }
}

export type Actions =
    | LoginRequestAction
    | LoginFailureAction
    | LoginSuccessAction
    | LogoutRequestAction
    | LogoutSuccessAction
    | LogoutFailureAction;
