import { createFeatureSelector, createSelector } from '@ngrx/store';
const getIsLoading = (state) => state.appHttpLoading.isLoading;
const getIsLoaded = (state) => state.appHttpLoading.isLoaded;
// tslint:disable-next-line: no-any
const getFakeData = (state) => state.fakeData;
export const selectFakeHttpErrorState = createFeatureSelector('fakeHttpErrorFeature');
export const selectFakeHttpErrorIsLoading = createSelector(selectFakeHttpErrorState, getIsLoading);
export const selectFakeHttpErrorIsLoaded = createSelector(selectFakeHttpErrorState, getIsLoaded);
export const selectFakeHttpError = createSelector(selectFakeHttpErrorState, getFakeData);
//# sourceMappingURL=selectors.js.map