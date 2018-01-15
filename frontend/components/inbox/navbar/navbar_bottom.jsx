import React from 'react';

class NavbarBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="navbar-bottom">
        <div className="navbar-bottom-left"></div>
        <div className="navbar-bottom-right">
          <div className="navbar-mail-actions"></div>
          <div className="navbar-settings"></div>
        </div>
      </div>
    );
  }
}

export default NavbarBottom;
