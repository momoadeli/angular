export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["FAKE_HTTP_ERROR_REQUEST"] = "[My Feature] Fake Http Error Request";
    ActionTypes["FAKE_HTTP_ERROR_REQUEST_FAILURE"] = "[My Feature] Fake Http Error Request Failure";
})(ActionTypes || (ActionTypes = {}));
export class FakeHttpErrorRequestAction {
    constructor() {
        this.type = ActionTypes.FAKE_HTTP_ERROR_REQUEST;
    }
}
export class FakeHttpErrorRequestFailureAction {
    constructor() {
        this.type = ActionTypes.FAKE_HTTP_ERROR_REQUEST_FAILURE;
    }
}
//# sourceMappingURL=actions.js.map