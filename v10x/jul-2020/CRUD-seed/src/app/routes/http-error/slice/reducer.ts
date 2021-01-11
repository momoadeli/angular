import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.HTTP_ERROR:
      return {
        ...state,
        httpError: action.payload.httpError
      };
    case ActionTypes.HTTP_ERROR_CLEAR:
      return {
        ...state,
        ...initialState
      };
    default: {
      return state;
    }
  }
}
