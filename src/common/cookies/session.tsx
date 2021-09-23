import { LoginType } from 'commonApp/interfaces';
import * as Cookies from 'js-cookie';

export const setSessionCookie = (session: LoginType): void => {
  Cookies.remove('session');
  Cookies.set('session', session, { expires: 14 });
};

export const getSessionCookie = ()  => {
  const sessionCookie = Cookies.get('session');

  if (sessionCookie === undefined) {
    return null;
  } else {
    return (sessionCookie);
  }
};
