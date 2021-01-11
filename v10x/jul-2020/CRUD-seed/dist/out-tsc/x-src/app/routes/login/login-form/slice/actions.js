export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOGIN_FORM_UPDATE"] = "[My Feature] Login Form Update";
})(ActionTypes || (ActionTypes = {}));
export class LoginFormUpdate {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGIN_FORM_UPDATE;
    }
}
//# sourceMappingURL=actions.js.map