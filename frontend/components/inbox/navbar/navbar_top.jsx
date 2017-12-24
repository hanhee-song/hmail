import React from 'react';
import { Link } from 'react-router-dom';

class NavbarTop extends React.Component {
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
          <div className="navbar-top-user">
            Users
            // NOTE TO SELF: ADD UI SLICE AND CONDITIONALLY RENDER
            // USER MENU BASED ON STORE PROPS RATHER THAN
            // INDIVIDUAL COMPONENT STATES
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarTop;
