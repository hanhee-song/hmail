import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  render () {
    return (
      <div className="welcome">
        <Navbar />
        Welcome to Hmail
        <Link to="/SignUp">CREATE AN ACCOUNT</Link>
      </div>
    );
  }
}

export default Welcome;
