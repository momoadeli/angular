import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import * as LoginFormSelectors from '../../login/login-form/slice/selectors';
import * as featureActions from './actions';
let LoginEffects = class LoginEffects {
    constructor(loginService, actions$, store) {
        this.loginService = loginService;
        this.actions$ = actions$;
        this.store = store;
        this.loginRequestEffect$ = this.actions$.pipe(ofType(featureActions.ActionTypes.LOGIN_REQUEST), withLatestFrom(this.store.select(LoginFormSelectors.selectLogin)), switchMap(([, login]) => this.loginService
            .login(login.uid, login.password)
            .pipe(map(user => new featureActions.LoginSuccessAction({
            user
        })))));
        this.logoutRequestEffect$ = this.actions$.pipe(ofType(featureActions.ActionTypes.LOGOUT_REQUEST), switchMap(() => this.loginService
            .logout()
            .pipe(map(() => new featureActions.LogoutSuccessAction()))));
    }
};
__decorate([
    Effect()
], LoginEffects.prototype, "loginRequestEffect$", void 0);
__decorate([
    Effect()
], LoginEffects.prototype, "logoutRequestEffect$", void 0);
LoginEffects = __decorate([
    Injectable()
], LoginEffects);
export { LoginEffects };
//# sourceMappingURL=effects.js.map