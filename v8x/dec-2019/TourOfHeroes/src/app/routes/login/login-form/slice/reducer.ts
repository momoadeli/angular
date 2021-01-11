import { Actions, ActionTypes } from './actions';
import { initialState, State } from './state';


export function featureReducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOGIN_FORM_UPDATE:
      return {
        ...state,
        login: action.payload.login
      };
    default: {
      return state;
    }
  }
}
