import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HttpErrorSliceModule } from 'src/app/routes/http-error/slice/http-error-slice.module';
import { LoginFormSliceModule } from '../../routes/login/login-form/slice/login-form-slice.module';
import { LoginSliceModule } from '../../routes/login/slice/login-slice.module';
import { ProductsSliceModule } from '../../routes/products/slice/products-slice.module';
import { AppHttpLoadingSliceModule } from '../app-http-loading/slice/app-http-loading-slice.module';
import { FakeHttpErrorSliceModule } from '../fake-http-error/slice/fake-http-error-slice.module';
let RootStoreModule = class RootStoreModule {
};
RootStoreModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            HttpErrorSliceModule,
            LoginSliceModule,
            LoginFormSliceModule,
            ProductsSliceModule,
            FakeHttpErrorSliceModule,
            AppHttpLoadingSliceModule,
            StoreModule.forRoot({}),
            EffectsModule.forRoot([])
        ]
    })
], RootStoreModule);
export { RootStoreModule };
//# sourceMappingURL=root-store.module.js.map