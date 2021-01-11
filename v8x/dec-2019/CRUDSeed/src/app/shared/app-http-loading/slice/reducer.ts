import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.START_LOADING:
      return {
        ...state,
        appHttpLoading: {
          isLoading: true,
          isLoaded: false
        }
      };
    case ActionTypes.STOP_LOADING:
      return {
        ...state,
        appHttpLoading: {
          isLoading: false,
          isLoaded: true
        }
      };
    default: {
      return state;
    }
  }
}
