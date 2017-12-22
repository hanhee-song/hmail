import { login, receiveSessionErrors, clearSessionErrors } from '../../actions/session_actions';
import { validateEmail, clearUserErrors } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Signin from './signin';

const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    errors: state.errors.users.concat(state.errors.session),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    validateEmail: (email) => dispatch(validateEmail(email)),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    clearUserErrors: () => dispatch(clearUserErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
