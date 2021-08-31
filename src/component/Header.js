import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='navigation'>
      <Link className='navLinks' id='homeLink' to='/home'>
        Home
      </Link>
      <Link className='navLinks' id='aboutLink' to='/about'>
        About
      </Link>

      <Link className='navLinks' id='contactLink' to='/contact'>
        Contact
      </Link>

      <h1 id='gitHired'>GitRecruited</h1>
    </div>
  );
}

export default Header;
