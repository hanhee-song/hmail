import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  render () {
    return (
      <div className="signup">
        <div className="signup-navbar">
          <div className="signup-navbar-left">
            <Link
              className="navbar-logo"
              to="/">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              <div>Hmail</div>
            </Link>
          </div>
          <div className="signup-navbar-right">
            <div className="signup-navbar-signin-wrapper">
              <Link
                className="signup-navbar-signin-button"
                to="/signin">
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div>
          This is a signup page
        </div>
      </div>
    );
  }
}

export default Signup;
