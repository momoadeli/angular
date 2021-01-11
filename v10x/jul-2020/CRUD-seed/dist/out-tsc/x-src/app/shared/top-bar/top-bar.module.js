import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { TopBarComponent } from './top-bar.component';
let TopBarModule = class TopBarModule {
};
TopBarModule = __decorate([
    NgModule({
        declarations: [TopBarComponent],
        exports: [TopBarComponent],
        imports: [
            CommonModule,
            AppRoutingModule,
            AppMaterialModule
        ]
    })
], TopBarModule);
export { TopBarModule };
//# sourceMappingURL=top-bar.module.js.map