import React from 'react';

const Projects = () => {
  return (
    <div className='projects max-width'>
      <a href='https://johnmike03.gitlab.io/csp1/' target='_blank' rel="noreferrer">
        <div className='work-block'>
          <h2>Portfolio</h2>
          <p className='size-small'>Statis website using HTML, CSS and Bootstrap</p>
        </div>
      </a>
      <a href='https://michael-csp2-app-client.glitch.me/' target='_blank' rel="noreferrer">
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