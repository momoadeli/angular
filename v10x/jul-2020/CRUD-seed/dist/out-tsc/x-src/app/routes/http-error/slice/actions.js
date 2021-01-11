export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["HTTP_ERROR"] = "[My Feature] HTTP Error";
    ActionTypes["HTTP_ERROR_CLEAR"] = "[My Feature] HTTP Error Clear";
})(ActionTypes || (ActionTypes = {}));
export class HttpErrorAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.HTTP_ERROR;
    }
}
export class HttpErrorClearAction {
    constructor() {
        this.type = ActionTypes.HTTP_ERROR_CLEAR;
    }
}
//# sourceMappingURL=actions.js.map