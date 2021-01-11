import { ActionTypes } from './actions';
import { initialState } from './state';
export function featureReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.START_LOADING:
            return Object.assign(Object.assign({}, state), { appHttpLoading: {
                    isLoading: true,
                    isLoaded: false
                } });
        case ActionTypes.STOP_LOADING:
            return Object.assign(Object.assign({}, state), { appHttpLoading: {
                    isLoading: false,
                    isLoaded: true
                } });
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=reducer.js.map