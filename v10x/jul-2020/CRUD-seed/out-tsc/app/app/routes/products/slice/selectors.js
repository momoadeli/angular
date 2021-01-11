import { createFeatureSelector, createSelector } from '@ngrx/store';
const getIsLoading = (state) => state.appHttpLoading.isLoading;
const getIsLoaded = (state) => state.appHttpLoading.isLoaded;
const getProducts = (state) => state.products;
export const selectProductsState = createFeatureSelector('productsFeature');
export const selectProductsIsLoading = createSelector(selectProductsState, getIsLoading);
export const selectProductsIsLoaded = createSelector(selectProductsState, getIsLoaded);
export const selectProducts = createSelector(selectProductsState, getProducts);
//# sourceMappingURL=selectors.js.map