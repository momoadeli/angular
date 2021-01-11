import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { Login } from '../../../login/login.interface';

import { State } from './state';

const getLogin = (state: State): Login => state.login;

export const selectLoginState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('loginFormFeature');

export const selectLogin: MemoizedSelector<
  object,
  Login
> = createSelector(
  selectLoginState,
  getLogin
);
