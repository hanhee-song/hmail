import React from 'react';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';

class Inbox extends React.Component {
  componentWillUnmount() {
    this.props.clearDropdown();
  }
  
  render () {
    return (
      <div className="inbox-main">
        <Navbar />
        <Sidebar />
      </div>
    );
  }
}

export default Inbox;
