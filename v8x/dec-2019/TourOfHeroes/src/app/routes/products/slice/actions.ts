import { Action } from '@ngrx/store';
import { Product } from '../product.interface';

export enum ActionTypes {
    PRODUCTS_REQUEST = '[My Feature] Products Request',
    PRODUCTS_REQUEST_FAILURE = '[My Feature] Products Request Failure',
    PRODUCTS_REQUEST_SUCCESS = '[My Feature] Products Request Success'
}

export class ProductsRequestAction implements Action {
    readonly type: ActionTypes.PRODUCTS_REQUEST = ActionTypes.PRODUCTS_REQUEST;
}

export class ProductsRequestFailureAction implements Action {
    readonly type: ActionTypes.PRODUCTS_REQUEST_FAILURE = ActionTypes.PRODUCTS_REQUEST_FAILURE;
    constructor(public payload: { appHttpError: string }) { }
}

export class ProductsRequestSuccessAction implements Action {
    readonly type: ActionTypes.PRODUCTS_REQUEST_SUCCESS = ActionTypes.PRODUCTS_REQUEST_SUCCESS;
    constructor(public payload: { products: Array<Product> }) { }
}

export type Actions =
    | ProductsRequestAction
    | ProductsRequestFailureAction
    | ProductsRequestSuccessAction;
