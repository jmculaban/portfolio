import React from 'react';

const NavBar = () => {
  const smallMedia = window.matchMedia('(max-width: 767px)');
  let content;

  if (smallMedia.matches) {
    content = 'michael.home';
  } else {
    content = 'michael.'
  }

  smallMedia.addEventListener('change', (e) => {
    if (smallMedia.matches) {
      if (document?.querySelector('#navbar-link')) {
        document.querySelector('#navbar-link').text = 'michael.home'
      }
    } else {
      if (document?.querySelector('#navbar-link')) {
        document.querySelector('#navbar-link').text = 'michael.'
      }
    }  
  });

  const navBarOver = (e) => {
    if (!smallMedia.matches) {
      e.target.innerText = 'michael.home'
    }
  }

  const navBarLeave = (e) => {
    if (!smallMedia.matches) {
      e.target.text = 'michael.'
    }
  }

  return (
    <nav>
      <a id='navbar-link' href='/' onMouseOver={navBarOver} onMouseLeave={navBarLeave}>{content}</a>
    </nav>
  );
};

export default NavBar;