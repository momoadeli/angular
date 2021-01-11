import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { LoginFormModule } from './login-form/login-form.module';
import { LoginComponent } from './login.component';
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    NgModule({
        declarations: [LoginComponent],
        exports: [LoginComponent],
        imports: [
            CommonModule,
            LoginFormModule,
            AppRoutingModule,
            AppMaterialModule
        ]
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map