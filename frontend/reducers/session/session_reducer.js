import {
  RECEIVE_CURRENT_USER,
} from '../../actions/session_actions';

const initialState = {
  currentUser: null,
};

const SessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState.currentUser = action.currentUser;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
