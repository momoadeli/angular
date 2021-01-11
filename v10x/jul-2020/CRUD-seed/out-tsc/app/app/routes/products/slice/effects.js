import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';
let ProductsEffects = class ProductsEffects {
    constructor(productsService, actions$) {
        this.productsService = productsService;
        this.actions$ = actions$;
        this.productsRequestEffect$ = this.actions$.pipe(ofType(featureActions.ActionTypes.PRODUCTS_REQUEST), switchMap(() => this.productsService
            .products()
            .pipe(map(products => new featureActions.ProductsRequestSuccessAction({
            products
        })))));
    }
};
__decorate([
    Effect()
], ProductsEffects.prototype, "productsRequestEffect$", void 0);
ProductsEffects = __decorate([
    Injectable()
], ProductsEffects);
export { ProductsEffects };
//# sourceMappingURL=effects.js.map