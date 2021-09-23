import * as React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Button from '@material-ui/core/Button';

export const logoutComponent: React.FC = () => {
  const { logout } = useAuth0();
  return (<Button onClick={() => logout({ returnTo: window.location.origin })} >Logout</Button>);
};
