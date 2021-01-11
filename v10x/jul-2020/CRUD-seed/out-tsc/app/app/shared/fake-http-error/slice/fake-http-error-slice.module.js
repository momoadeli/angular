import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FakeHttpErrorEffects } from './effects';
import { featureReducer } from './reducer';
let FakeHttpErrorSliceModule = class FakeHttpErrorSliceModule {
};
FakeHttpErrorSliceModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            StoreModule.forFeature('fakeHttpErrorFeature', featureReducer),
            EffectsModule.forFeature([FakeHttpErrorEffects])
        ]
    })
], FakeHttpErrorSliceModule);
export { FakeHttpErrorSliceModule };
//# sourceMappingURL=fake-http-error-slice.module.js.map