import { LoginComponent, logoutComponent } from 'common/login';
import * as React from 'react';
import { Link } from 'react-router-dom';

export const App: React.FC<{}> = () => {


  return (
    <>
      <h1>Vtes Closet</h1>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/login`} component={LoginComponent}/>
            </li>
            <li>
              <Link to={`/logout`} component={logoutComponent}/>
            </li>
            <li>
              <Link to={`/profile`}>User Profile</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
