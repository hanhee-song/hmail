import React from 'react';
import { Link } from 'react-router-dom';
import { parseEmail, fullEmail } from '../../util/validate_email';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validatingEmail: false,
      submittedEmail: "",
      errors: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
  }
  
  componentWillMount() {
    this.props.history.push("/signin/identifier");
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.state.validatingEmail) {
      if (Object.keys(nextProps.users).includes(this.state.submittedEmail)) {
        this.props.history.push("/signin/pwd");
        this.setState({ validatingEmail: false });
        this.props.clearSessionErrors();
        this.props.clearUserErrors();
      } else if (nextProps.errors[0]) {
        this.setState({ validatingEmail: false });
        this.selectField("email");
      }
    }
    
    // HANDLE AUTOFOCUS ON SWITCHING PATHNAMES
    if (nextProps.location.pathname === "/signin/identifier") {
      // change email field to most recently submitted/verified email
      this.setState({ email: this.state.submittedEmail });
      setTimeout(() => {
        this.selectField('email');
      }, 250);
    } else if (nextProps.location.pathname === "/signin/pwd") {
      setTimeout(() => {
        this.selectField('password');
      }, 250);
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    // ERROR CLEARING
    if (this.props.location.pathname === "/signin/identifier") {
      if (this.state.email) {
        this.props.clearSessionErrors();
      } else {
        this.props.clearUserErrors();
      }
    }
    
    if (this.props.location.pathname === "/signin/identifier") {
      this.handleEmailSubmit();
    } else if (this.props.location.pathname === "/signin/pwd") {
      this.props.login({
        email: this.state.email,
        password: this.state.password
      });
    }
  }
  
  handleEmailSubmit() {
    const email = parseEmail(this.state.email);
    if (email) {
      this.setState({
        validatingEmail: true,
        submittedEmail: email,
       });
       setTimeout(() => {
         this.props.validateEmail(email);
       }, 0);
    } else {
      this.setState({
        validatingEmail: true,
      });
      setTimeout(() => {
        this.props.receiveSessionErrors(["Enter an email"]);
      }, 0);
    }
  }
  
  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  selectField(field) {
    const input = document.querySelector(`.signin-input.${field}`);
    input.focus();
  }
  
  render () {
    return (
        <div className="signin">
          <div className="signin-main">
            <div className={`signin-panels ${this.props.location.pathname === "/signin/pwd" && "pwd"}`}>
              
              <div className="signin-panels-email">
                <form className="signin-form"
                  onSubmit={this.handleSubmit}>
                  <Link
                    className="navbar-logo"
                    to="/">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div>Hmail</div>
                  </Link>
                  <div className="signin-bigtext">Sign In</div>
                  <div className="signin-smalltext">to continue to Hmail</div>
                  
                  <div className="signin-input-wrapper">
                    <input
                      className={`signin-input email ${this.props.errors[0] && "error"}`}
                      onChange={this.handleChange("email")}
                      value={this.state.email}/>
                    <span></span>
                    <div className={`input-placeholder ${this.state.email && "filled"}`}>Email</div>
                  </div>
                  <div className="signin-input-error">{this.props.errors[0]}</div>
                  <input className="signin-button"
                    type="submit"
                    value="NEXT" />
                </form>
              </div>
              
              <div className="signin-panels-password">
                <form className="signin-form"
                  onSubmit={this.handleSubmit}>
                  <Link
                    className="navbar-logo"
                    to="/">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    <div>Hmail</div>
                  </Link>
                  <div className="signin-bigtext">Welcome</div>
                  <div className="signin-smalltext">{fullEmail(this.state.submittedEmail)}</div>
                  
                  <div className="signin-input-wrapper">
                    <input
                      type="password"
                      className={`signin-input password ${this.props.errors[0] && "error"}`}
                      onChange={this.handleChange("password")}
                      value={this.state.password}/>
                    <span></span>
                    <div className={`input-placeholder ${this.state.password && "filled"}`}>Enter your password</div>
                  </div>
                  <div className="signin-input-error">{this.props.errors[0]}</div>
                  <input className="signin-button"
                    type="submit"
                    value="NEXT" />
                </form>
              </div>
              
            </div>
          </div>
        </div>
    );
  }
}

export default Signin;
