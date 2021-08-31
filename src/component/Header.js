import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link id='homeLink' to='/home'>
        Home
      </Link>
      <Link id='aboutLink' to='/about'>
        About
      </Link>

      <Link id='contactLink' to='/contact'>
        Contact
      </Link>

      <h1 id='gitHired'>GitRecruited</h1>
    </>
  );
}

export default Header;
