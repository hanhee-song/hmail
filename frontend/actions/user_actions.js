import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const CLEAR_USER_ERRORS = "CLEAR_USER_ERRORS";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

export const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors,
  };
};

export const clearUserErrors = () => {
  return {
    type: CLEAR_USER_ERRORS,
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    return UserApiUtil.fetchUser(id)
      .then(
        user => dispatch(receiveUser(user)),
        errors => dispatch(receiveUserErrors(errors))
      );
  };
};

export const validateEmail = (email) => {
  return (dispatch) => {
    return UserApiUtil.validateEmail(email)
      .then(
        user => dispatch(receiveUser(user)),
        errors => dispatch(receiveUserErrors(errors))
      );
  };
};
