import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { HttpErrorResponse } from '@angular/common/http';
import { State } from './state';

const getHttpError = (state: State): HttpErrorResponse => state.httpError;

export const selectHttpErrorState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('httpErrorFeature');

export const selectHttpError: MemoizedSelector<
  object,
  HttpErrorResponse
> = createSelector(
  selectHttpErrorState,
  getHttpError
);
