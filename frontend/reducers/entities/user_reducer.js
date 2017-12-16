import { RECEIVE_USER } from '../../actions/user_actions';
import merge from 'lodash/merge';

const initialState = {};

const UserReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  
  switch (action.type) {
    case RECEIVE_USER:
      newState.action.user.id = action.user;
      return newState;
    default:
      return state;
  }
};

export default UserReducer;
