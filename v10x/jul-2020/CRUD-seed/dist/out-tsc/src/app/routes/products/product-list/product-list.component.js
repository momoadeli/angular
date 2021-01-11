import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as ProductsActions from '../slice/actions';
import * as ProductsSelectors from '../slice/selectors';
let ProductListComponent = class ProductListComponent {
    constructor(productsService, store) {
        this.productsService = productsService;
        this.store = store;
    }
    get products$() {
        return this.store.select(ProductsSelectors.selectProducts);
    }
    ngOnInit() {
        this.store.dispatch(new ProductsActions.ProductsRequestAction());
    }
};
ProductListComponent = __decorate([
    Component({
        selector: 'crud-seed-product-list',
        templateUrl: './product-list.component.html',
        styleUrls: ['./product-list.component.scss']
    })
], ProductListComponent);
export { ProductListComponent };
//# sourceMappingURL=product-list.component.js.map