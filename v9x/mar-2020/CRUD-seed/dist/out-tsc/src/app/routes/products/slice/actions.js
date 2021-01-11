export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["PRODUCTS_REQUEST"] = "[My Feature] Products Request";
    ActionTypes["PRODUCTS_REQUEST_FAILURE"] = "[My Feature] Products Request Failure";
    ActionTypes["PRODUCTS_REQUEST_SUCCESS"] = "[My Feature] Products Request Success";
})(ActionTypes || (ActionTypes = {}));
export class ProductsRequestAction {
    constructor() {
        this.type = ActionTypes.PRODUCTS_REQUEST;
    }
}
export class ProductsRequestFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCTS_REQUEST_FAILURE;
    }
}
export class ProductsRequestSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.PRODUCTS_REQUEST_SUCCESS;
    }
}
//# sourceMappingURL=actions.js.map