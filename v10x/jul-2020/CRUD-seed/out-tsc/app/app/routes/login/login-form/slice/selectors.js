import { createFeatureSelector, createSelector } from '@ngrx/store';
const getLogin = (state) => state.login;
export const selectLoginState = createFeatureSelector('loginFormFeature');
export const selectLogin = createSelector(selectLoginState, getLogin);
//# sourceMappingURL=selectors.js.map