import React from 'react';
import onClickOutside from 'react-onclickoutside';

class NavbarUserDropdown extends React.Component {
  handleClickOutside() {
    this.props.receiveDropdown();
  }
  
  render () {
    const currentUser = this.props.currentUser;
    return (
      <div className="user-dropdown">
        <div className="user-dropdown-top">
          <div className="user-dropdown-top-left">
            {currentUser.fname[0]}
          </div>
          
          <div className="user-dropdown-top-right">
            <div className="user-name">
              {currentUser.fname + " " + currentUser.lname}
            </div>
            <div className="user-email">
              {currentUser.email + "@hmail.com"}
            </div>
          </div>
        </div>
        <div className="user-dropdown-bottom">dropdown bot</div>
      </div>
    );
  }
}

export default onClickOutside(NavbarUserDropdown);
