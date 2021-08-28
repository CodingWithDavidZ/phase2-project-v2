import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <title>GitRecruited</title>
      <Link to='/about'>About</Link>
      <br></br>
      <Link to='/contact'>Contact</Link>
      <h1 id='gitHired'>GitRecruited</h1>
    </>
  );
}

export default Header;
