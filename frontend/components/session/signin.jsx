import React from 'react';
import { Link } from 'react-router-dom';
import { parseEmail, fullEmail } from '../../util/validate_email';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailHasAt: false,
      password: "",
      validatingEmail: false,
      validatingPassword: false,
      submittedEmail: "",
      submittedPassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
  }
  
  componentWillMount() {
    this.props.clearSessionErrors();
    this.props.clearUserErrors();
    this.props.history.replace("/signin/identifier");
    setTimeout(() => {
      this.selectField('email');
    }, 250);
  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname === "/signin") {
      this.props.history.replace("/signin/identifier");
    }
    
    // Block attempting to hit /pwd without submitting an email
    if (nextProps.location.pathname === "/signin/pwd" && !this.state.submittedEmail) {
      this.props.history.replace("/signin/identifier");
    }
    
    // If email is being validated, see if user shows up in users slice
    // or if an error appears
    if (this.state.validatingEmail) {
      if (Object.keys(nextProps.users).includes(this.state.submittedEmail)) {
        this.props.history.push("/signin/pwd");
        this.setState({ validatingEmail: false });
      } else if (nextProps.errors[0]) {
        this.setState({
          validatingEmail: false,
          submittedEmail: "",
        });
        this.selectField("email");
      }
    }
    
    if (this.state.validatingPassword && nextProps.errors[0]) {
      this.setState({
        validatingPassword: false,
        password: "",
      });
      this.selectField("password");
    }
    
    // HANDLE AUTOFOCUS ON SWITCHING PATHNAMES
    if (nextProps.location.pathname === "/signin/identifier" && this.props.location.pathname === "/signin/pwd") {
      // change email field to most recently submitted/verified email
      if (this.state.emailHasAt) {
        this.setState({ email: fullEmail(this.state.submittedEmail) });
      } else {
        this.setState({ email: this.state.submittedEmail });
      }
      this.props.clearSessionErrors();
      this.props.clearUserErrors();
      setTimeout(() => {
        this.selectField('email');
      }, 250);
    } else if (nextProps.location.pathname === "/signin/pwd" && this.props.location.pathname === "/signin/identifier") {
      this.setState({ password: "" });
      this.props.clearSessionErrors();
      this.props.clearUserErrors();
      setTimeout(() => {
        this.selectField('password');
      }, 250);
    }
  }
  
  componentWillUnmount() {
    // CLEAR ERRORS ON SUCCESSFUL LOGIN
    this.props.clearSessionErrors();
    this.props.clearUserErrors();
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
    
    // SUBMIT EMAIL
    if (this.props.location.pathname === "/signin/identifier") {
      this.handleEmailSubmit();
      
    // SUBMIT PASSWORD
    } else if (this.props.location.pathname === "/signin/pwd") {
      this.handlePasswordSubmit();
    }
  }
  
  handleEmailSubmit() {
    const email = parseEmail(this.state.email);
    if (email) {
      this.setState({
        validatingEmail: true,
        submittedEmail: email,
        emailHasAt: this.state.email.includes("@"),
       });
       setTimeout(() => {
         this.props.validateEmail(email);
       }, 0);
    } else {
      this.setState({
        validatingEmail: true,
        submittedEmail: "",
      });
      setTimeout(() => {
        this.props.receiveSessionErrors(["Enter an email"]);
      }, 0);
    }
  }
  
  handlePasswordSubmit() {
    this.props.clearSessionErrors();
    this.props.clearUserErrors();
    this.setState({
      validatingPassword: true,
      submittedPassword: this.state.password,
    });
    setTimeout(() => {
      this.props.login({
        email: this.state.email,
        password: this.state.password
      });
    }, 0);
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
                  <div className="signin-input-error">
                    {
                      this.props.errors[0] &&
                      (this.state.submittedPassword ? "Wrong password." : "Enter a password")
                    }
                  </div>
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
