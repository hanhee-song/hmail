import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Welcome from './welcome/welcome';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';
import Inbox from './inbox/inbox';

const App = () => {
  return (
    <section className="app">
      <Switch>
        <ProtectedRoute
          component={Inbox}
          path="/inbox"/>
        <AuthRoute
          component={SignupContainer}
          path="/SignUp"/>
        <AuthRoute
          component={SigninContainer}
          path="/signin"/>
        <ProtectedRoute
          path="/inbox"/>
        <AuthRoute
          component={Welcome}
          path="/" />
      </Switch>
    </section>
  );
};

export default App;

// inbox;
//   navbar-top;
//   navbar-bottom;
//   sidebar;
//     sidebar-index;
//   message-index;
//     message-index-header;
//     message-index-items;
//     message-index-footer;
