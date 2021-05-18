import React from 'react';

const NavBar = () => {
  const navBarOver = (e) => {
    e.target.innerText = "michael.home"
  }

  const navBarLeave = (e) => {
    e.target.text = "michael."
  }

  return (
    <nav>
      <a id='navbar-link' href='/' onMouseOver={navBarOver} onMouseLeave={navBarLeave}>michael.</a>
    </nav>
  );
};

export default NavBar;