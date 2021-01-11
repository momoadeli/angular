import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';

export function featureReducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.PRODUCTS_REQUEST:
      return {
        ...state,
        appHttpLoading: {
          isLoading: true,
          isLoaded: false
        }
      };
    case ActionTypes.PRODUCTS_REQUEST_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        appHttpLoading: {
          isLoading: false,
          isLoaded: true
        }
      };
    case ActionTypes.PRODUCTS_REQUEST_FAILURE:
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
