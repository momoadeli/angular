import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsService } from './products.service';
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    NgModule({
        declarations: [ProductListComponent],
        imports: [
            CommonModule
        ],
        providers: [ProductsService]
    })
], ProductsModule);
export { ProductsModule };
//# sourceMappingURL=products.module.js.map