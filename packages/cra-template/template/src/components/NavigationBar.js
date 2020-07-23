import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1 className="App-Title">BEN PLUNKETT</h1>{' '}
      <div className="NavBar">
        <Link to="/" className="NavItem">
          HOME
        </Link>
        <Link to="/Tech" className="NavItem">
          TECHNOLOGIES
        </Link>
        <Link className="NavItem" to="/Projects">
          PROJECTS
        </Link>
      </div>
    </header>
  );
};

export default Header;
