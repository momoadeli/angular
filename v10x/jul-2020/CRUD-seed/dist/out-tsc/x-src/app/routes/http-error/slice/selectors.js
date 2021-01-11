import { createFeatureSelector, createSelector } from '@ngrx/store';
const getHttpError = (state) => state.httpError;
export const selectHttpErrorState = createFeatureSelector('httpErrorFeature');
export const selectHttpError = createSelector(selectHttpErrorState, getHttpError);
//# sourceMappingURL=selectors.js.map