import React from 'react';
import { Link } from 'react-router-dom';

const SignupNavbar = () => (
  <div className="signup-navbar">
    <div className="signup-navbar-left">
      <Link
        className="navbar-logo"
        to="/">
        <i className="fa fa-envelope-o" aria-hidden="true"></i>
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
);

export default SignupNavbar;
