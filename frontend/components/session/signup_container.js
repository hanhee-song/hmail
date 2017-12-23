import { connect } from 'react-redux';
import { signup, receiveSessionErrors, clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    receiveSessionErrors: (errors) => dispatch(receiveSessionErrors(errors)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
