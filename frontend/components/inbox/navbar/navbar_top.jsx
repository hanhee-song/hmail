import React from 'react';
import { Link } from 'react-router-dom';
import NavbarUserDropdownContainer from './navbar_user_dropdown_container';

class NavbarTop extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserIconClick = this.handleUserIconClick.bind(this);
  }
  
  handleUserIconClick() {
    this.props.receiveDropdown("NavbarUserDropdown");
  }
  
  render () {
    return (
      <div className="navbar-top">
        <div className="navbar-top-left">
          <Link
            className="navbar-top-logo"
            to="/inbox">
            <div>Hmail</div>
          </Link>
        </div>
        <div className="navbar-top-right">
          <div className="navbar-top-search">
            Searchbar
          </div>
          <div className="navbar-top-user-options">
            <div className="navbar-top-user-icon"
              onClick={this.handleUserIconClick}>{this.props.currentUser.fname[0]}</div>
            {
              this.props.dropdown === "NavbarUserDropdown" &&
              <NavbarUserDropdownContainer />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarTop;
