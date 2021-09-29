import * as React from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { Button } from '@material-ui/core';

export const LoginComponent: React.FC = () => {
  const { keycloak } = useKeycloak();
  return <Button onClick={() => keycloak.login()}>Login</Button>;
};

