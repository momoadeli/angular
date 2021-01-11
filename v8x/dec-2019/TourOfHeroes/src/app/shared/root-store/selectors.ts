import { HttpErrorResponse } from '@angular/common/http';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import * as HttpErrorSelectors from '../../routes/http-error/slice/selectors';
import * as LoginSelectors from '../../routes/login/slice/selectors';
import * as ProductsSelectors from '../../routes/products/slice/selectors';

export const selectHttpError: MemoizedSelector<
  object,
  HttpErrorResponse
> = createSelector(
  HttpErrorSelectors.selectHttpError,
  (httpError: HttpErrorResponse) => {
    return httpError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  LoginSelectors.selectLoginIsLoading,
  ProductsSelectors.selectProductsIsLoading,
  (loginIsLoading: boolean = false, productsIsLoading: boolean = false) => {
    return loginIsLoading || productsIsLoading;
  }
);

export const selectIsLoaded: MemoizedSelector<
  object,
  boolean
> = createSelector(
  LoginSelectors.selectLoginIsLoaded,
  ProductsSelectors.selectProductsIsLoaded,
  (loginIsLoaded: boolean = false, productsIsLoaded: boolean = false) => {
    return loginIsLoaded || productsIsLoaded;
  }
);


