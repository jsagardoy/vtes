import * as React from 'react';
import ReactDOM from 'react-dom';
import { ClientsContainerComponent } from 'layout';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { App } from 'scenes/app';

import { LoginComponent, logoutComponent } from 'common/login';
import { UserProfileComponent } from 'pods/userProfile';

const eventLogger = (event: unknown, error: unknown) => {
  console.log('onKeycloakEvent', event, error);
};

const tokenLogger = (tokens: unknown) => {
  console.log('onKeycloakTokens', tokens);
};

ReactDOM.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    onEvent={eventLogger}
    onTokens={tokenLogger}
  >
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/profile' component={UserProfileComponent} />
        <Route
          exact
          path='/users/:userId'
          component={ClientsContainerComponent}
        />
      </Switch>
    </Router>
  </ReactKeycloakProvider>,
  document.getElementById('root')
);
