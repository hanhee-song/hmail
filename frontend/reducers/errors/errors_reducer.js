import { combineReducers } from 'redux';
import session from './session_errors_reducer';
import users from './user_errors_reducer';

const ErrorsReducer = combineReducers({
  session,
  users,
});

export default ErrorsReducer;
