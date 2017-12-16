import { combineReducers } from 'redux';
import users from './user_reducer';

const EntitiesReducer = combineReducers({
  users,
});

export default EntitiesReducer;
