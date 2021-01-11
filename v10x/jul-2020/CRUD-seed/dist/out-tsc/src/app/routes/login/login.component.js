import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as LoginActions from '../login/slice/actions';
let LoginComponent = class LoginComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    requestLogin() {
        this.store.dispatch(new LoginActions.LoginRequestAction());
    }
    ngOnDestroy() {
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'crud-seed-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map