import React from 'react';
import onClickOutside from 'react-onclickoutside';

class NavbarUserDropdown extends React.Component {
  handleClickOutside() {
    this.props.receiveDropdown();
  }
  
  render () {
    return (
      <div className="user-dropdown">
        <div className="user-dropdown-top">
          <div className="user-dropdown-top-left"></div>
          <div className="user-dropdown-top-right">
            <div className="user-name">
              Username
            </div>
            <div className="user-email">
              Email
            </div>
          </div>
        </div>
        <div className="user-dropdown-bottom">dropdown bot</div>
      </div>
    );
  }
}

export default onClickOutside(NavbarUserDropdown);
