import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    return (
      <div>
        <Link to="/">Hmail</Link>
        <Link to="/signin">SIGN IN</Link>
        <Link to="/SignUp">CREATE AN ACCOUNT</Link>
      </div>
    );
  }
}

export default Navbar;
