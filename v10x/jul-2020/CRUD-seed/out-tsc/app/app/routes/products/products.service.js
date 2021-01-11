import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    products() {
        return this.http.get('http://localhost:3000/api/products')
            // tslint:disable-next-line: no-any
            .pipe(map((res) => {
            return res.data;
        }));
    }
};
ProductsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map