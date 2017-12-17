import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  render () {
    return (
      <div className="welcome">
        <Navbar />
        <div className="welcome-1">
          <div className="welcome-1-left">
            <div className="welcome-1-text">
              Welcome to Hmail
            </div>
            <br />
            <Link
              className="welcome-button welcome-create-button"
              to="/SignUp"></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
