import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LazyState } from './reducers';

export interface AppState {
    lazyState: LazyState;
}


export const featureSelector = createFeatureSelector<AppState, LazyState>('lazyState');
export const getCounter = (state: LazyState) => { debugger; return state.lazyCounter; };

export const getMyCounter = createSelector(
    featureSelector,
    getCounter
);