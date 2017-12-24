import { RECEIVE_DROPDOWN } from "../../actions/ui_actions";

const initialState = {
  dropdown: "",
};

const UIReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_DROPDOWN:
      newState.dropdown = action.dropdown;
      return newState;
    default:
      return state;
  }
};

export default UIReducer;
