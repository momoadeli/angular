import { ActionTypes } from './actions';
import { initialState } from './state';
export function featureReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.LOGIN_FORM_UPDATE:
            return Object.assign(Object.assign({}, state), { login: action.payload.login });
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=reducer.js.map