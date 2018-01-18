import React from 'react';
import Navbar from './navbar/navbar';
import SidebarContainer from './sidebar/sidebar_container';
import MessageIndexContainer from './message/message_index_container';

class Inbox extends React.Component {
  componentWillUnmount() {
    this.props.clearDropdown();
  }
  
  render () {
    return (
      <div className="hmail-main">
        <Navbar />
        <div className="inbox-main">
          <SidebarContainer />
          <MessageIndexContainer />
        </div>
      </div>
    );
  }
}

export default Inbox;
