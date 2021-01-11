import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import * as LoginFormActions from './slice/actions';
import * as LoginFormSelectors from './slice/selectors';
let LoginFormService = class LoginFormService {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.destroy$ = new Subject();
        this._loginForm = null;
        this.initForm();
        this.subscribeLoginFormStoreSlice();
    }
    get loginForm() {
        return this._loginForm;
    }
    set loginForm(form) {
        this._loginForm = form;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    initForm() {
        this.loginForm = this.fb.group({
            uid: ['', Validators.required],
            pwd: ['', Validators.required]
        });
        this.loginForm.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((login) => {
            this.store.dispatch(new LoginFormActions.LoginFormUpdate({ login }));
        });
    }
    subscribeLoginFormStoreSlice() {
        this.store.select(LoginFormSelectors.selectLogin)
            .pipe(takeUntil(this.destroy$)).subscribe((user) => {
            this.loginForm.patchValue(user, { emitEvent: false });
        });
    }
};
LoginFormService = __decorate([
    Injectable()
], LoginFormService);
export { LoginFormService };
//# sourceMappingURL=login-form.service.js.map