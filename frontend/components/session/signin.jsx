import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    this.props.login({
      email: this.state.email,
      password: this.state.password
    });
  }
  
  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  render () {
    return (
      <form>
        <input
          className="signin-input email"
          onChange={this.handleChange("email")}
          value={this.state.email}/>
        <input
          className="signin-input password"
          onChange={this.handleChange("password")}
          value={this.state.password}/>
      </form>
    );
  }
}

export default Signin;
