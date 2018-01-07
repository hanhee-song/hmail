import React from 'react';
import { Link } from 'react-router-dom';
import NavbarUserDropdownContainer from './navbar_user_dropdown_container';

class NavbarTop extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserIconClick = this.handleUserIconClick.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.state = {
      searchInput: "",
    };
  }
  
  handleUserIconClick() {
    this.props.receiveDropdown("NavbarUserDropdown");
  }
  
  handleSearchInput(e) {
    this.setState({
      searchInput: e.target.value,
    });
  }
  
  handleSearchSubmit() {
    
  }
  
  render () {
    return (
      <div className="navbar-top">
        <div className="navbar-top-left">
          <Link
            className="navbar-top-logo"
            to="/inbox">
            <div>Hmail</div>
          </Link>
        </div>
        <div className="navbar-top-right">
          <form className="navbar-top-search"
            onSubmit={this.handleSearchSubmit}>
            <input
              className="input"
              type="text"
              onChange={this.handleSearchInput}
              value={this.state.searchInput}></input>
            <div className="button"><i className="fa fa-search"></i></div>
          </form>
          <div className="navbar-top-user-options">
            <div className="navbar-top-user-icon"
              onClick={this.handleUserIconClick}>{this.props.currentUser.fname[0]}</div>
            {
              this.props.dropdown === "NavbarUserDropdown" &&
              <NavbarUserDropdownContainer />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarTop;
