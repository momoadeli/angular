export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["START_LOADING"] = "[My Feature] Start Loading";
    ActionTypes["STOP_LOADING"] = "[My Feature] Stop Loading";
})(ActionTypes || (ActionTypes = {}));
export class StartLoadingAction {
    constructor() {
        this.type = ActionTypes.START_LOADING;
    }
}
export class StopLoadingAction {
    constructor() {
        this.type = ActionTypes.STOP_LOADING;
    }
}
//# sourceMappingURL=actions.js.map