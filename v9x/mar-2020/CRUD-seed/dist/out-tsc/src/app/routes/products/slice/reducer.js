import { ActionTypes } from './actions';
import { initialState } from './state';
export function featureReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.PRODUCTS_REQUEST:
            return Object.assign(Object.assign({}, state), { appHttpLoading: {
                    isLoading: true,
                    isLoaded: false
                } });
        case ActionTypes.PRODUCTS_REQUEST_SUCCESS:
            return Object.assign(Object.assign({}, state), { products: action.payload.products, appHttpLoading: {
                    isLoading: false,
                    isLoaded: true
                } });
        case ActionTypes.PRODUCTS_REQUEST_FAILURE:
            return Object.assign(Object.assign({}, state), { appHttpLoading: {
                    isLoading: false,
                    isLoaded: false
                } });
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=reducer.js.map