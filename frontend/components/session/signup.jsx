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
    this.updateState = this.updateState.bind(this);
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
      if (nextProps.errors.includes("Email has already been taken")) {
        errors.email = "Someone already has that username. Try another?";
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
    const s = this.state;
    // First make 'focused' true for all fields in this.state.focus
    // then, do a front-end check for errors
    let noSubmit = false;
    Object.values(s.errors).forEach((error) => {
      noSubmit = noSubmit || Boolean(error);
    });
    noSubmit = noSubmit || !(s.fname && s.lname && s.email && s.password1);
    // lastly, submit the form when there are no front-end errors
    if (noSubmit) {
      // Run through every field and trigger the on-blur effects
      this.setState({
        focused: {
          fname: true,
          lname: true,
          email: true,
          password1: true,
          password2: true,
        }
      });
      setTimeout(() => {
        ["fname", "lname", "email", "password2", "password1"].forEach((field) => {
          this.handleBlur(field)();
        });
      }, 0);
    } else {
      this.props.signup({
        fname: s.fname,
        lname: s.lname,
        email: s.email,
        password: s.password1,
      }).then(
        success => this.props.history.push("/inbox")
      );
    }
  }
  
  handleFocus(field) {
    return (e) => {
      this.updateState("focused", field, true);
    };
  }
  
  handleBlur(field) {
    const s = this.state;
    return (e) => {
      if (field.includes("password")) {
        this.handlePasswordErrors(field);
      } else {
        if (!s[field]) {
          this.updateState("errors", field, "You can't leave this empty.");
        } else {
          this.updateState("errors", field, "");
        }
      }
    };
  }
  
  handlePasswordErrors(field) {
    const s = this.state;
    // Cases:
    // 0. one or both are empty and blurred
      // a. p1 is focused and empty
      // b. p2 is focused and empty, and p1 is also empty
    // 1. the first field is blurred and full // and the second field is blank
      // a. not long enough
      // b. long enough
    // 2. the second field is blurred and full
      // a. they don't match
      // b. they match
    if (s.focused.password1 && !s.password1) {
      this.updateState("errors", "password1", "You can't leave this empty.");
    }
    if (s.focused.password2 && !s.password1 && !s.password2) {
      this.updateState("errors", "password2", "You can't leave this empty.");
    }
    
    if (s.password1) {
      if (s.password1.length < 6) {
        this.updateState("errors", "password1", "Short passwords are easy to guess. Try one with at least 6 characters.");
        if (!s.password2) {
          this.updateState("errors", "password2", "");
          this.updateState("focused", "password2", false);
        }
      } else {
        this.updateState("errors", "password1", "");
        if (!s.password2 && s.focused.password2) {
          this.updateState("errors", "password2", "You can't leave this empty.");
        }
      }
    }
    
    if (s.focused.password2 && s.password2) {
      if (s.password1 !== s.password2) {
        this.updateState("errors", "password2", "These passwords don't match. Try again?");
      } else if (s.password2) {
        this.updateState("errors", "password2", "");
      }
    }
  }
  
  updateState(slice, field, value) {
    setTimeout(() => {
      console.log(slice, field, value);
      this.setState({ [slice]: Object.assign({}, this.state[slice], { [field]: value }) });
    }, 0);
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
                  <div className="signup-input-error">
                    {this.state.errors.fname || this.state.errors.lname}
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
                  <div className="signup-input-error">
                    {this.state.errors.email}
                  </div>
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
                  <div className="signup-input-error">
                    {this.state.errors.password1}
                  </div>
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
                  <div className="signup-input-error">
                    {this.state.errors.password2}
                  </div>
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
