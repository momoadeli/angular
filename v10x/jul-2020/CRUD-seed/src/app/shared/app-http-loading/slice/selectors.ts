import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './state';

const getIsLoading = (state: State): boolean => state.appHttpLoading.isLoading;

const getIsLoaded = (state: State): boolean => state.appHttpLoading.isLoaded;

export const selectLoadingState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('loadingFeature');

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectLoadingState,
  getIsLoading
);

export const selectIsLoaded: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectLoadingState,
  getIsLoaded
);

