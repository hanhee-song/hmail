import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignupNavbar from './signup_navbar.jsx';

class Signup extends React.Component {
  render () {
    return (
      <div className="signup">
        <SignupNavbar />
        <div className="signup-main">
          <div className="signup-main-header">
            Create your Hmail Account
          </div>
          <div className="signup-main-body">
            <div className="signup-main-left">
              
            </div>
            <div className="signup-main-right">
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
