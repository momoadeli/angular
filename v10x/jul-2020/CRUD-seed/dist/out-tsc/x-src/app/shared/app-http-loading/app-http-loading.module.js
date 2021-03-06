import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../app-material.module';
import { AppHttpLoadingComponent } from './app-http-loading.component';
let AppHttpLoadingModule = class AppHttpLoadingModule {
};
AppHttpLoadingModule = __decorate([
    NgModule({
        declarations: [AppHttpLoadingComponent],
        exports: [AppHttpLoadingComponent],
        imports: [
            CommonModule,
            AppMaterialModule
        ]
    })
], AppHttpLoadingModule);
export { AppHttpLoadingModule };
//# sourceMappingURL=app-http-loading.module.js.map