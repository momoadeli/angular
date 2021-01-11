import { Action } from '@ngrx/store';


export enum ActionTypes {
    START_LOADING = '[My Feature] Start Loading',
    STOP_LOADING = '[My Feature] Stop Loading'
}

export class StartLoadingAction implements Action {
    readonly type: ActionTypes.START_LOADING = ActionTypes.START_LOADING;
}

export class StopLoadingAction implements Action {
    readonly type: ActionTypes.STOP_LOADING = ActionTypes.STOP_LOADING;
}


export type Actions =
    | StartLoadingAction
    | StopLoadingAction;
