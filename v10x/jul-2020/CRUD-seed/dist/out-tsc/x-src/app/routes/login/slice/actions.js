export var ActionTypes;
(function (ActionTypes) {
    ActionTypes["LOGIN_REQUEST"] = "[My Feature] Login Request";
    ActionTypes["LOGIN_FAILURE"] = "[My Feature] Login Failure";
    ActionTypes["LOGIN_SUCCESS"] = "[My Feature] Login Success";
    ActionTypes["LOGOUT_REQUEST"] = "[My Feature] Logout Request";
    ActionTypes["LOGOUT_SUCCESS"] = "[My Feature] Logout Success";
    ActionTypes["LOGOUT_FAILURE"] = "[My Feature] Logout Failure";
})(ActionTypes || (ActionTypes = {}));
export class LoginRequestAction {
    constructor() {
        this.type = ActionTypes.LOGIN_REQUEST;
    }
}
export class LoginFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGIN_FAILURE;
    }
}
export class LoginSuccessAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGIN_SUCCESS;
    }
}
export class LogoutRequestAction {
    constructor() {
        this.type = ActionTypes.LOGOUT_REQUEST;
    }
}
export class LogoutSuccessAction {
    constructor() {
        this.type = ActionTypes.LOGOUT_SUCCESS;
    }
}
export class LogoutFailureAction {
    constructor(payload) {
        this.payload = payload;
        this.type = ActionTypes.LOGOUT_FAILURE;
    }
}
//# sourceMappingURL=actions.js.map