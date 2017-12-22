import { login } from '../../actions/session_actions';
import { validateEmail } from '../../actions/user_actions';
import { connect } from 'react-redux';
import Signin from './signin';

const mapStateToProps = (state) => {
  return {
    users: state.entities.users,
    errors: state.errors.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    validateEmail: (email) => dispatch(validateEmail(email)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
