import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

export enum ActionTypes {
    HTTP_ERROR = '[My Feature] HTTP Error',
    HTTP_ERROR_CLEAR = '[My Feature] HTTP Error Clear'
}

export class HttpErrorAction implements Action {
    readonly type: ActionTypes.HTTP_ERROR = ActionTypes.HTTP_ERROR;
    constructor(public payload: { httpError: HttpErrorResponse }) { }
}

export class HttpErrorClearAction implements Action {
  readonly type: ActionTypes.HTTP_ERROR_CLEAR = ActionTypes.HTTP_ERROR_CLEAR;
}

export type Actions =
    | HttpErrorAction
    | HttpErrorClearAction;
