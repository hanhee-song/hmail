import React from 'react';
import Navbar from './navbar/navbar';

class Inbox extends React.Component {
  componentWillUnmount() {
    this.props.clearDropdown();
  }
  
  render () {
    return (
      <div className="inbox-main">
        <Navbar />
      </div>
    );
  }
}

export default Inbox;
