import * as React from 'react';
import * as Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

interface Props {}

export const logoutHandlerComponent: React.FC<Props> = (props) => {
  const history = useHistory();
  React.useEffect(() => {
    Cookies.remove('session');
    history.push('/login');
    window.location.reload();
  }, [history]);
  return <div>Logging out!</div>;
};
