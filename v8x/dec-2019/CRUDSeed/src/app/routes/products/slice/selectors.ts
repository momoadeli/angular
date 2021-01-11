import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { Product } from '../product.interface';

import { State } from './state';

const getIsLoading = (state: State): boolean => state.appHttpLoading.isLoading;

const getIsLoaded = (state: State): boolean => state.appHttpLoading.isLoaded;

const getProducts = (state: State): Array<Product> => state.products;

export const selectProductsState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('productsFeature');

export const selectProductsIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectProductsState,
  getIsLoading
);

export const selectProductsIsLoaded: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectProductsState,
  getIsLoaded
);

export const selectProducts: MemoizedSelector<
  object,
  Array<Product>
> = createSelector(
  selectProductsState,
  getProducts
);
