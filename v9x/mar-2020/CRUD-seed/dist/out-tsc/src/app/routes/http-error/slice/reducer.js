import { ActionTypes } from './actions';
import { initialState } from './state';
export function featureReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.HTTP_ERROR:
            return Object.assign(Object.assign({}, state), { httpError: action.payload.httpError });
        case ActionTypes.HTTP_ERROR_CLEAR:
            return Object.assign(Object.assign({}, state), initialState);
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=reducer.js.map