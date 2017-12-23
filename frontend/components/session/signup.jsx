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
      errors: {
        fname: "",
        lname: "",
        email: "",
        password1: "",
        password2: "",
      },
      focused: {
        fname: false,
        lname: false,
        email: false,
        password1: false,
        password2: false,
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  
  componentWillReceiveProps(nextProps) {
    const errors = {
      fname: "",
      lname: "",
      email: "",
      password1: "",
      password2: "",
    };
    if (nextProps.errors) {
      if (nextProps.errors.includes("Email can't be blank")) {
        errors.email = "You can't leave this empty.";
      }
      if (nextProps.errors.includes("Fname can't be blank")) {
        errors.fname = "You can't leave this empty.";
      }
      if (nextProps.errors.includes("Lname can't be blank")) {
        errors.lname = "You can't leave this empty.";
      }
      if (nextProps.errors.includes("Password is too short (minimum is 6 characters)")) {
        errors.email = "Short passwords are easy to guess. Try one with at least 6 characters.";
      }
    }
  }
  
  resetErrors() {
    this.setState({
      errors: {
        fname: "",
        lname: "",
        email: "",
        password1: "",
        password2: "",
      }
    });
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
    }).then(
        success => this.props.history.push("/inbox")
      );
  }
  
  handleFocus(field) {
    return (e) => {
      this.setState({ focused: Object.assign({}, this.state.focused, { [field]: true }) });
    };
  }
  
  handleBlur(field) {
    return (e) => {
      if (!this.state[field]) {
        this.setState({ errors: Object.assign({}, this.state.errors, { [field]: "You can't leave this empty" }) });
      } else {
        this.setState({ errors: Object.assign({}, this.state.errors, { [field]: "" }) });
      }
    };
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
                      className={`signup-input name ${this.state.errors["fname"] && "error"}`}
                      type="text"
                      onChange={this.handleChange("fname")}
                      value={this.state.fname}
                      placeholder="First"
                      onFocus={this.handleFocus("fname")}
                      onBlur={this.handleBlur("fname")}/>
                    <input
                      className={`signup-input name ${this.state.errors["lname"] && "error"}`}
                      type="text"
                      onChange={this.handleChange("lname")}
                      value={this.state.lname}
                      placeholder="Last"
                      onFocus={this.handleFocus("lname")}
                      onBlur={this.handleBlur("lname")}/>
                  </div>
                </div>
                
                <div className="signup-input-section">
                  <label className="signup-label email">
                    Choose your username
                    <br />
                    <input
                      className={`signup-input full ${this.state.errors["email"] && "error"}`}
                      type="text"
                      onChange={this.handleChange("email")}
                      value={this.state.email}
                      placeholder=""
                      onFocus={this.handleFocus("email")}
                      onBlur={this.handleBlur("email")}/>
                    <div className="signup-email-tag">@hmail.com</div>
                  </label>
                </div>
                
                <div className="signup-input-section">
                  <label className="signup-label">
                    Create a password
                    <br />
                    <input
                      className={`signup-input full ${this.state.errors["password1"] && "error"}`}
                      type="password"
                      onChange={this.handleChange("password1")}
                      value={this.state.password1}
                      placeholder=""
                      onFocus={this.handleFocus("password1")}
                      onBlur={this.handleBlur("password1")}/>
                  </label>
                </div>
                
                <div className="signup-input-section">
                  <label className="signup-label">
                    Confirm your password
                    <br />
                    <input
                      className={`signup-input full ${this.state.errors["password2"] && "error"}`}
                      type="password"
                      onChange={this.handleChange("password2")}
                      value={this.state.password2}
                      placeholder=""
                      onFocus={this.handleFocus("password2")}
                      onBlur={this.handleBlur("password2")}/>
                  </label>
                </div>
                
                <div className="signup-input-section">
                  <label className="signup-label">
                    Your current email address
                    <br />
                    <input
                      className={`signup-input full ${""}`}
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
                    value="Sign Up" />
                </div>
              </form>
              {this.props.errors}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
