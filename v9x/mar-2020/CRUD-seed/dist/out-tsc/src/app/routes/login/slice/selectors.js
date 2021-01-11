import { createFeatureSelector, createSelector } from '@ngrx/store';
const getIsLoading = (state) => state.appHttpLoading.isLoading;
const getIsLoaded = (state) => state.appHttpLoading.isLoaded;
const getUser = (state) => state.user;
export const selectLoginState = createFeatureSelector('loginFeature');
export const selectLoginIsLoading = createSelector(selectLoginState, getIsLoading);
export const selectLoginIsLoaded = createSelector(selectLoginState, getIsLoaded);
export const selectLoginUser = createSelector(selectLoginState, getUser);
//# sourceMappingURL=selectors.js.map