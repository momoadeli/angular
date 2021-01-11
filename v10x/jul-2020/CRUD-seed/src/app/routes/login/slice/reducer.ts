import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        appHttpLoading: {
          isLoading: true,
          isLoaded: false
        }
      };
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        appHttpLoading: {
          isLoading: false,
          isLoaded: true
        }
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        appHttpLoading: {
          isLoading: false,
          isLoaded: false
        }
      };
    case ActionTypes.LOGOUT_REQUEST:
      return {
        ...state,
        user: null,
        appHttpLoading: {
          isLoading: true,
          isLoaded: false
        }
      };
    case ActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        appHttpLoading: {
          isLoading: false,
          isLoaded: false
        }
      };
    case ActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState
      };
    default: {
      return state;
    }
  }
}
