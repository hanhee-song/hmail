import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SignupNavbar from './signup_navbar.jsx';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password1: "",
      password2: "",
      email2: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.signup({
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password1,
    });
  }
  
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
              
              <form onSubmit={this.handleSubmit}>
                <div className="signup-input-section">
                  <label className="signup-label">
                    Name
                  </label>
                  <div className="signup-names">
                    <input
                      className="signup-input name"
                      type="text"
                      onChange={this.handleChange("fname")}
                      value={this.state.fname}
                      placeholder="First"/>
                    <input
                      className="signup-input name"
                      type="text"
                      onChange={this.handleChange("lname")}
                      value={this.state.lname}
                      placeholder="Last"/>
                  </div>
                </div>
                
                <div className="signup-input-section">
                  <label className="signup-label email">
                    Choose your username
                    <br />
                    <input
                      className="signup-input full"
                      type="text"
                      onChange={this.handleChange("email")}
                      value={this.state.email}
                      placeholder=""/>
                    <div className="signup-email-tag">@hmail.com</div>
                  </label>
                </div>
                
                <div className="signup-input-section">
                  <label className="signup-label">
                    Create a password
                    <br />
                    <input
                      className="signup-input full"
                      type="password"
                      onChange={this.handleChange("password1")}
                      value={this.state.password1}
                      placeholder=""/>
                  </label>
                </div>
                
                <div className="signup-input-section">
                  <label className="signup-label">
                    Confirm your password
                    <br />
                    <input
                      className="signup-input full"
                      type="password"
                      onChange={this.handleChange("password2")}
                      value={this.state.password2}
                      placeholder=""/>
                  </label>
                </div>
                
                <div className="signup-input-section">
                  <label className="signup-label">
                    Your current email address
                    <br />
                    <input
                      className="signup-input full"
                      type="text"
                      onChange={this.handleChange("email2")}
                      value={this.state.email2}
                      placeholder=""/>
                  </label>
                </div>
                
                <div className="next-step-wrapper">
                  <input
                    className="signup-navbar-signin-button next-step"
                    type="submit"
                    value="Next Step" />
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
