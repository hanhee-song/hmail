import React from 'react';
import { Link } from 'react-router-dom';
import { parseEmail } from '../../util/validate_email';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validatingEmail: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentWillMount() {
    this.props.history.push("/signin/identifier");
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.state.validatingEmail) {
      debugger;
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.location.pathname === "/signin/identifier") {
      const email = parseEmail(this.state.email);
      this.props.validateEmail(email);
      this.setState({ validatingEmail: true });
    } else if (this.props.location.pathname === "/signin/pwd") {
      this.props.login({
        email: this.state.email,
        password: this.state.password
      });
    }
  }
  
  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  render () {
    return (
        <div className="signin">
          <div className="signin-main">
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
                  className="signin-input email"
                  onChange={this.handleChange("email")}
                  value={this.state.email}/>
                <span></span>
                <div className={`email-placeholder ${this.state.email && "filled"}`}>Email</div>
              </div>
              
              <input className="signin-button"
                type="submit"
                value="NEXT" />
              
              <input
                className="signin-input password"
                onChange={this.handleChange("password")}
                value={this.state.password}/>
          </form>
          </div>
        </div>
    );
  }
}

export default Signin;
