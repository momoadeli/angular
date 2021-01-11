import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMaterialModule } from 'src/app/shared/app-material.module';
import { HttpErrorComponent } from './http-error.component';
let HttpErrorModule = class HttpErrorModule {
};
HttpErrorModule = __decorate([
    NgModule({
        declarations: [HttpErrorComponent],
        exports: [HttpErrorComponent],
        imports: [
            CommonModule,
            AppRoutingModule,
            AppMaterialModule
        ]
    })
], HttpErrorModule);
export { HttpErrorModule };
//# sourceMappingURL=http-error.module.js.map