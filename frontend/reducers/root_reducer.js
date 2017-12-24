import { combineReducers } from 'redux';
import entities from './entities/entities_reducer';
import errors from './errors/errors_reducer';
import session from './session/session_reducer';
import ui from './ui/ui_reducer';

const RootReducer = combineReducers({
  entities,
  errors,
  session,
  ui,
});

export default RootReducer;
