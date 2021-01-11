import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureReducer } from './reducer';
let HttpErrorSliceModule = class HttpErrorSliceModule {
};
HttpErrorSliceModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            StoreModule.forFeature('httpErrorFeature', featureReducer)
        ]
    })
], HttpErrorSliceModule);
export { HttpErrorSliceModule };
//# sourceMappingURL=http-error-slice.module.js.map