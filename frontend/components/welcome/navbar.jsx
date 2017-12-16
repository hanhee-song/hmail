import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    return (
      <div>
        <div className="welcome-navbar">
          <div className="welcome-navbar-left">
            <Link
              className="welcome-navbar-logo"
              to="/"><i class="fa fa-envelope-o" aria-hidden="true"></i>Hmail</Link>
          </div>
          <div className="welcome-navbar-right">
            <Link to="/signin">SIGN IN</Link>
            <Link
              className="welcome-create-button"
              to="/SignUp">CREATE AN ACCOUNT</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
