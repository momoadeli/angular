import { createFeatureSelector, createSelector } from '@ngrx/store';
const getIsLoading = (state) => state.appHttpLoading.isLoading;
const getIsLoaded = (state) => state.appHttpLoading.isLoaded;
export const selectLoadingState = createFeatureSelector('loadingFeature');
export const selectIsLoading = createSelector(selectLoadingState, getIsLoading);
export const selectIsLoaded = createSelector(selectLoadingState, getIsLoaded);
//# sourceMappingURL=selectors.js.map