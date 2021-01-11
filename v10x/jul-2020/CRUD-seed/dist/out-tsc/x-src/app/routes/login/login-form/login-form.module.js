import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { LoginFormComponent } from './login-form.component';
let LoginFormModule = class LoginFormModule {
};
LoginFormModule = __decorate([
    NgModule({
        declarations: [LoginFormComponent],
        exports: [LoginFormComponent],
        imports: [
            CommonModule,
            AppMaterialModule,
            ReactiveFormsModule
        ]
    })
], LoginFormModule);
export { LoginFormModule };
//# sourceMappingURL=login-form.module.js.map