import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { State } from './state';

const getIsLoading = (state: State): boolean => state.appHttpLoading.isLoading;

const getIsLoaded = (state: State): boolean => state.appHttpLoading.isLoaded;

// tslint:disable-next-line: no-any
const getFakeData = (state: State): any => state.fakeData;

export const selectFakeHttpErrorState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('fakeHttpErrorFeature');

export const selectFakeHttpErrorIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectFakeHttpErrorState,
  getIsLoading
);

export const selectFakeHttpErrorIsLoaded: MemoizedSelector<
  object,
  boolean
> = createSelector(
  selectFakeHttpErrorState,
  getIsLoaded
);

export const selectFakeHttpError: MemoizedSelector<
  object,
  // tslint:disable-next-line: no-any
  any
> = createSelector(
  selectFakeHttpErrorState,
  getFakeData
);
