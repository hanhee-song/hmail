import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignupNavbar from './signup_navbar.jsx';

class Signup extends React.Component {
  render () {
    return (
      <div className="signup">
        <SignupNavbar />
        <div>
          This is a signup page
        </div>
      </div>
    );
  }
}

export default Signup;
