import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { productsFake } from './products.fake';
let ProductsService = class ProductsService {
    constructor() { }
    products() {
        return of(productsFake)
            .pipe(delay(2000) // simulate http api delay (with global state swirl)
        );
    }
};
ProductsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map