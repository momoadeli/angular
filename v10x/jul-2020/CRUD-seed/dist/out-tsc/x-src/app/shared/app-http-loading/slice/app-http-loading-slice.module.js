import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducer';
let AppHttpLoadingSliceModule = class AppHttpLoadingSliceModule {
};
AppHttpLoadingSliceModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            StoreModule.forFeature('loadingFeature', featureReducer)
        ]
    })
], AppHttpLoadingSliceModule);
export { AppHttpLoadingSliceModule };
//# sourceMappingURL=app-http-loading-slice.module.js.map