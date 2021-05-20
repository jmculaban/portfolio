import React from 'react';
import NavBar from '../components/NavBar';
import Social from '../components/Social';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className='max-width about-block animate'>
        <h2>Let's create great solution!</h2>
        <div className='max-width-inner'>
          <h4>Contact</h4>
          <p>We can work together to solve real business-problem in a way that optimizes all of our respective experience and knowledge.</p>
          <p>Feel free to reach out.</p>
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Contact;