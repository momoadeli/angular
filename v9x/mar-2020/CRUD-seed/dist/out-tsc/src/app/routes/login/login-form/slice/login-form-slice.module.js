import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducer';
let LoginFormSliceModule = class LoginFormSliceModule {
};
LoginFormSliceModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            StoreModule.forFeature('loginFormFeature', featureReducer)
        ]
    })
], LoginFormSliceModule);
export { LoginFormSliceModule };
//# sourceMappingURL=login-form-slice.module.js.map