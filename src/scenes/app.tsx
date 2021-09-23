import { getSessionCookie } from 'common/cookies';
import { LoginType } from 'commonApp/interfaces';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const App: React.FC<{}> = () => {
  const cookieValues: LoginType = JSON.parse(getSessionCookie());

  return (
    <>
      <h1>Home APP</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/login`}>Login</Link>
            </li>
            <li>
              <Link to={`/logout`}>Logout</Link>
            </li>
            <li>
              <Link to={`/collection/${cookieValues.userId}`}>Collection</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
