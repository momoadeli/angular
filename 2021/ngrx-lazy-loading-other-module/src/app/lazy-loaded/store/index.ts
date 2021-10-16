import { inc, dec } from './actions';
import { lazyReducer } from './reducers';
import { getMyCounter, featureSelector } from './selectors';

const fromLazyStore = { inc, dec, lazyReducer, featureSelector, getMyCounter };
export { fromLazyStore };
