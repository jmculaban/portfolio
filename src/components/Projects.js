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
    </div>
  );
};

export default Projects;