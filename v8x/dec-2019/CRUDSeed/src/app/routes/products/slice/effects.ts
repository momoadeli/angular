import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as RootStoreState from '../../../shared/root-store/root-state';
import { ProductsService } from '../products.service';
import * as featureActions from './actions';

@Injectable()
export class ProductsEffects {
  constructor(private productsService: ProductsService, private actions$: Actions) { }

  @Effect()
  productsRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.ProductsRequestAction>(
      featureActions.ActionTypes.PRODUCTS_REQUEST
    ),
    switchMap(() =>
      this.productsService
        .products()
        .pipe(
          map(
            products =>
              new featureActions.ProductsRequestSuccessAction({
                products
              })
          )
        )
    )
  );
}
