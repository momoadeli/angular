import { createSelector } from '@ngrx/store';
import * as HttpErrorSelectors from '../../routes/http-error/slice/selectors';
import * as LoginSelectors from '../../routes/login/slice/selectors';
import * as ProductsSelectors from '../../routes/products/slice/selectors';
import * as FakeHttpErrorSelectors from '../fake-http-error/slice/selectors';
export const selectHttpError = createSelector(HttpErrorSelectors.selectHttpError, (httpError) => {
    return httpError;
});
export const selectIsLoading = createSelector(LoginSelectors.selectLoginIsLoading, ProductsSelectors.selectProductsIsLoading, FakeHttpErrorSelectors.selectFakeHttpErrorIsLoading, (loginIsLoading = false, productsIsLoading = false, fakeHttpErrorIsLoading = false) => {
    return loginIsLoading || productsIsLoading || fakeHttpErrorIsLoading;
});
export const selectIsLoaded = createSelector(LoginSelectors.selectLoginIsLoaded, ProductsSelectors.selectProductsIsLoaded, FakeHttpErrorSelectors.selectFakeHttpErrorIsLoaded, (loginIsLoaded = false, productsIsLoaded = false, fakeHttpErrorIsLoaded = false) => {
    return loginIsLoaded || productsIsLoaded || fakeHttpErrorIsLoaded;
});
//# sourceMappingURL=selectors.js.map