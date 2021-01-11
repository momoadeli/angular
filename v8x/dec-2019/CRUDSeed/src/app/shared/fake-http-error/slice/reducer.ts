import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.FAKE_HTTP_ERROR_REQUEST:
      return {
        ...state,
        appHttpLoading: {
          isLoading: true,
          isLoaded: false
        }
      };
    case ActionTypes.FAKE_HTTP_ERROR_REQUEST_FAILURE:
      return {
        ...state,
        appHttpLoading: {
          isLoading: false,
          isLoaded: false
        }
      };
    default: {
      return state;
    }
  }
}
