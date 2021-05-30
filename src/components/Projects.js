import React from 'react';

const Projects = () => {
  return (
    <div className='projects max-width animate'>
      <a href='https://johnmike03.gitlab.io/csp1/' target='_blank' rel="noreferrer">
        <div className='work-block'>
          <h2>Portfolio</h2>
          <p className='size-small'>Portfolio Template</p>
          <p className='size-small'>Static website using HTML, CSS and Bootstrap</p>
        </div>
      </a>
      <a href='https://sayun-courses.glitch.me/' target='_blank' rel="noreferrer">
        <div className='work-block'>
          <h2>Sayún</h2>
          <p className='size-small'>Course Booking System</p>
          <p className='size-small'>Build using MongoDB, Express, Vanilla JS and Node.js</p>
        </div>
      </a>
      <a href='https://tigana.vercel.app/' target='_blank' rel="noreferrer">
        <div className='work-block'>
          <h2>Tigána</h2>
          <p className='size-small'>Budget Tracker App</p>
          <p className='size-small'>On going development</p>
          <p className='size-small'>Build using MongoDB, Express, React/Next JS and Node.js with token based authentication feature.</p>
        </div>
      </a>
    </div>
  );
};

export default Projects;