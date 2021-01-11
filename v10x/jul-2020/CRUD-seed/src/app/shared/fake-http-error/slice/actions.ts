import { Action } from '@ngrx/store';

export enum ActionTypes {
    FAKE_HTTP_ERROR_REQUEST = '[My Feature] Fake Http Error Request',
    FAKE_HTTP_ERROR_REQUEST_FAILURE = '[My Feature] Fake Http Error Request Failure',
}

export class FakeHttpErrorRequestAction implements Action {
    readonly type: ActionTypes.FAKE_HTTP_ERROR_REQUEST = ActionTypes.FAKE_HTTP_ERROR_REQUEST;
}

export class FakeHttpErrorRequestFailureAction implements Action {
  readonly type: ActionTypes.FAKE_HTTP_ERROR_REQUEST_FAILURE = ActionTypes.FAKE_HTTP_ERROR_REQUEST_FAILURE;
}


export type Actions =
    | FakeHttpErrorRequestAction
    | FakeHttpErrorRequestFailureAction;
