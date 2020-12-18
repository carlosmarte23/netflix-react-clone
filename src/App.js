import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home, SignIn } from './pages';
import * as ROUTES from './constants/routes';

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <p>I will be the sign up page</p>
        </Route>
        <Route path={ROUTES.BROWSE}>
          <p>I will be the browse page</p>
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
