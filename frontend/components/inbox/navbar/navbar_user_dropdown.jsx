import React from 'react';
import onClickOutside from 'react-onclickoutside';

class NavbarUserDropdown extends React.Component {
  handleClickOutside() {
    this.props.receiveDropdown();
  }
  
  render () {
    return (
      <div className="navbar-top-user-dropdown">
        <div className="navbar-top-user-dropdown-top">dropdown top</div>
        <div className="navbar-top-user-dropdown-bottom">dropdown bot</div>
      </div>
    );
  }
}

export default onClickOutside(NavbarUserDropdown);
