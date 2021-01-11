import { ActionTypes } from './actions';
import { initialState } from './state';
export function featureReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.FAKE_HTTP_ERROR_REQUEST:
            return Object.assign(Object.assign({}, state), { appHttpLoading: {
                    isLoading: true,
                    isLoaded: false
                } });
        case ActionTypes.FAKE_HTTP_ERROR_REQUEST_FAILURE:
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