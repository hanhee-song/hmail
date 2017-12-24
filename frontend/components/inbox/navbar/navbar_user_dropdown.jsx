import React from 'react';
import onClickOutside from 'react-onclickoutside';

class NavbarUserDropdown extends React.Component {
  handleClickOutside() {
    this.props.receiveDropdown();
  }
  
  render () {
    return (
      <div>This is dropdown</div>
    );
  }
}

export default onClickOutside(NavbarUserDropdown);
