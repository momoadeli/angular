import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorModule } from '../routes/http-error/http-error.module';
import { LoginModule } from '../routes/login/login.module';
import { ProductsModule } from '../routes/products/products.module';
import { AppHttpLoadingModule } from './app-http-loading/app-http-loading.module';
import { AppMaterialModule } from './app-material.module';
import { AngularErrorHandlerService } from './errors/angular-error-handler.service';
import { FakeHttpErrorModule } from './fake-http-error/fake-http-error.module';
import { AuthenticationErrorInterceptor } from './interceptors/authentication-error.interceptor';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { RootStoreModule } from './root-store/root-store.module';
import { TopBarModule } from './top-bar/top-bar.module';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        exports: [TopBarModule, AppHttpLoadingModule],
        imports: [
            CommonModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule,
            AppMaterialModule,
            FakeHttpErrorModule,
            ProductsModule,
            LoginModule,
            HttpErrorModule,
            RootStoreModule
        ],
        providers: [
            { provide: ErrorHandler, useClass: AngularErrorHandlerService },
            { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
            { provide: HTTP_INTERCEPTORS, useClass: AuthenticationErrorInterceptor, multi: true }
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map