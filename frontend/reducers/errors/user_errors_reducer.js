import {
  RECEIVE_USER,
  RECEIVE_USER_ERRORS,
  CLEAR_USER_ERRORS,
} from '../../actions/user_actions';

const initialState = [];

const UserErrorsReducer = (state = initialState, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_USER:
    case CLEAR_USER_ERRORS:
      return initialState;
    case RECEIVE_USER_ERRORS:
      debugger;
      return;
    default:
      return state;
  }
};

export default UserErrorsReducer;
