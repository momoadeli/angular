import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import { User } from '../../../shared/user.interface';

import { State } from './state';

const getIsLoading = (state: State): boolean => state.appHttpLoading.isLoading;

const getIsLoaded = (state: State): boolean => state.appHttpLoading.isLoaded;

const getUser = (state: State): User => {
  return state.user;
};

export const selectLoginState: MemoizedSelector<
    object,
    State
> = createFeatureSelector<State>('loginFeature');

export const selectLoginIsLoading: MemoizedSelector<
    object,
    boolean
> = createSelector(
    selectLoginState,
    getIsLoading
);

export const selectLoginIsLoaded: MemoizedSelector<
    object,
    boolean
> = createSelector(
    selectLoginState,
    getIsLoaded
);

export const selectLoginUser: MemoizedSelector<
    object,
    User
> = createSelector(
    selectLoginState,
    getUser
);
