import { HttpErrorResponse } from '@angular/common/http';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import * as HttpErrorSelectors from '../../routes/http-error/slice/selectors';
import * as LoginSelectors from '../../routes/login/slice/selectors';
import * as ProductsSelectors from '../../routes/products/slice/selectors';
import * as FakeHttpErrorSelectors from '../fake-http-error/slice/selectors';

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
  FakeHttpErrorSelectors.selectFakeHttpErrorIsLoading,
  (loginIsLoading: boolean = false, productsIsLoading: boolean = false, fakeHttpErrorIsLoading: boolean = false) => {
    return loginIsLoading || productsIsLoading || fakeHttpErrorIsLoading;
  }
);

export const selectIsLoaded: MemoizedSelector<
  object,
  boolean
> = createSelector(
  LoginSelectors.selectLoginIsLoaded,
  ProductsSelectors.selectProductsIsLoaded,
  FakeHttpErrorSelectors.selectFakeHttpErrorIsLoaded,
  (loginIsLoaded: boolean = false, productsIsLoaded: boolean = false, fakeHttpErrorIsLoaded: boolean = false) => {
    return loginIsLoaded || productsIsLoaded || fakeHttpErrorIsLoaded;
  }
);


