import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoginEffects } from './effects';
import { featureReducer } from './reducer';
let LoginSliceModule = class LoginSliceModule {
};
LoginSliceModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            StoreModule.forFeature('loginFeature', featureReducer),
            EffectsModule.forFeature([LoginEffects])
        ],
        providers: [LoginEffects]
    })
], LoginSliceModule);
export { LoginSliceModule };
//# sourceMappingURL=login-slice.module.js.map