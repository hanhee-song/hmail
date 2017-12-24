import { connect } from 'react-redux';
import NavbarTop from './navbar_top';
import { receiveDropdown } from '../../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    dropdown: state.ui.dropdown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveDropdown: () => dispatch(receiveDropdown()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarTop);
