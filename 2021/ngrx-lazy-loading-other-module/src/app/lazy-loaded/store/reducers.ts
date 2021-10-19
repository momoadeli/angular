import { createReducer, on } from '@ngrx/store';
import { inc, dec } from './actions';

export interface LazyState {
    lazyCounter: number;
}

const initialLazyState: LazyState = {
    lazyCounter: 0
};

export const lazyReducer = createReducer<LazyState>(initialLazyState,
    on(inc, state => ({ lazyCounter: state.lazyCounter + 1 })),
    on(dec, state => ({ lazyCounter: state.lazyCounter - 1 })),
);

export function reducer(state: any, action: any) {
    console.log(action);
    return lazyReducer(state, action);
}