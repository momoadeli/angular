import { ActionTypes } from './actions';
import { initialState } from './state';
export function featureReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_REQUEST:
            return Object.assign(Object.assign({}, state), { appHttpLoading: {
                    isLoading: true,
                    isLoaded: false
                } });
        case ActionTypes.LOGIN_SUCCESS:
            return Object.assign(Object.assign({}, state), { user: action.payload.user, appHttpLoading: {
                    isLoading: false,
                    isLoaded: true
                } });
        case ActionTypes.LOGIN_FAILURE:
            return Object.assign(Object.assign({}, state), { appHttpLoading: {
                    isLoading: false,
                    isLoaded: false
                } });
        case ActionTypes.LOGOUT_REQUEST:
            return Object.assign(Object.assign({}, state), { user: null, appHttpLoading: {
                    isLoading: true,
                    isLoaded: false
                } });
        case ActionTypes.LOGOUT_FAILURE:
            return Object.assign(Object.assign({}, state), { appHttpLoading: {
                    isLoading: false,
                    isLoaded: false
                } });
        case ActionTypes.LOGOUT_SUCCESS:
            return Object.assign(Object.assign({}, state), initialState);
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=reducer.js.map