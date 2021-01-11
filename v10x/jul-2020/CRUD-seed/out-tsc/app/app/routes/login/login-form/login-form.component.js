import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { ENUM_LOGIN_FAKE } from '../login.fake';
import { LoginFormService } from './login-form.service';
let LoginFormComponent = class LoginFormComponent {
    constructor(loginFormService) {
        this.loginFormService = loginFormService;
        this.submitLogin = new EventEmitter();
        this.loginFake = ENUM_LOGIN_FAKE;
        this.loginForm = this.loginFormService.loginForm;
    }
    ngOnInit() {
        // always clear form on entry. this will clear form slice too
        this.loginForm.reset();
    }
    submit(ev) {
        // this.submitLogin.emit({ uid: ENUM_LOGIN_FAKE.UID, password: ENUM_LOGIN_FAKE.PWD });
        this.submitLogin.emit({ uid: this.loginFormService._loginForm.controls.uid.value,
            password: this.loginFormService._loginForm.controls.pwd.value
        });
    }
    ngOnDestroy() {
    }
};
__decorate([
    Output()
], LoginFormComponent.prototype, "submitLogin", void 0);
LoginFormComponent = __decorate([
    Component({
        selector: 'crud-seed-login-form',
        templateUrl: './login-form.component.html',
        styleUrls: ['./login-form.component.scss'],
        providers: [LoginFormService] // this makes service bound it this components life-cycle (not a singleton!)
    })
], LoginFormComponent);
export { LoginFormComponent };
//# sourceMappingURL=login-form.component.js.map