import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Welcome from './welcome/welcome';
import Signup from './session/signup';

const App = () => {
  return (
    <section>
      <Switch>
        <AuthRoute
          component={Signup}
          path="/SignUp"/>
        <AuthRoute
          component={Welcome}
          path="/" />
      </Switch>
    </section>
  );
};

export default App;
