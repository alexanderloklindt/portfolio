import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export interface ILayoutprops {}

const Layout: React.FunctionComponent<ILayoutprops> = (props) => {
  return (
    <div>
      <h1>Layout</h1>

      <ul>
        <li>
          <Link to="/projects">All projects</Link>
        </li>
        <li>
          <Link to="/projects/project">Project</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Layout;
