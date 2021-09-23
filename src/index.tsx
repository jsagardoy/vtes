import * as React from 'react';
import ReactDOM from 'react-dom';
import { ClientsContainerComponent } from 'layout';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { App } from 'scenes/app';

import { LoginComponent, logoutComponent } from 'common/login';
import { UserProfileComponent } from 'pods/userProfile';

ReactDOM.render(
  <Auth0Provider
    domain='vtes-closet.eu.auth0.com'
    clientId='DeY17E2VSYvIhgZGkzhuX9uWineBxvsn'
    redirectUri={window.location.origin} // podría ser /
  >
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/profile' component={ UserProfileComponent} />
        <Route
          exact
          path='/users/:userId'
          component={ClientsContainerComponent}
        />
      </Switch>
    </Router>
  </Auth0Provider>,
  document.getElementById('root')
);
