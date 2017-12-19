import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';
import Signin from './signin';

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signin);
