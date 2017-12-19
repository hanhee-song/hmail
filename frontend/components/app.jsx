import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Welcome from './welcome/welcome';
import SignupContainer from './session/signup_container';
import SigninContainer from './session/signin_container';

const App = () => {
  return (
    <section>
      <Switch>
        <AuthRoute
          component={SignupContainer}
          path="/SignUp"/>
        <AuthRoute
          component={SigninContainer}
          path="/signin"/>
        <AuthRoute
          component={Welcome}
          path="/" />
      </Switch>
    </section>
  );
};

export default App;
