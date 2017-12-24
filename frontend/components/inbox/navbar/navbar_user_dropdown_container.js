import { connect } from 'react-redux';
import NavbarUserDropdown from './navbar_user_dropdown';
import { logout } from '../../../actions/session_actions';
import { receiveDropdown } from '../../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    receiveDropdown: () => dispatch(receiveDropdown()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarUserDropdown);
