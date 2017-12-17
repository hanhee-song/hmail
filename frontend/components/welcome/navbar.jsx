import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    return (
      <div>
        <div className="welcome-navbar">
          <div className="welcome-navbar-left">
            <Link
              className="navbar-logo"
              to="/">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              <div>Hmail</div>
            </Link>
          </div>
          <div className="welcome-navbar-right">
            <Link
              className="welcome-button hoverable"
              to="/signin">SIGN IN</Link>
            <Link
              className="welcome-button welcome-create-button"
              to="/SignUp"></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
