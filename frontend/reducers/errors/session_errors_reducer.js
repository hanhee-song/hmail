import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  CLEAR_SESSION_ERRORS,
} from '../../actions/session_actions';

const initialState = [];

const SessionErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
      return initialState;
    case RECEIVE_SESSION_ERRORS:
      if (Array.isArray(action.errors)) {
        return action.errors;
      } else {
        return action.errors.responseJSON;
      }
    default:
      return state;
  }
};

export default SessionErrorsReducer;
