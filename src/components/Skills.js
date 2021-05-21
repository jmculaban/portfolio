import React from 'react';

const Skills = () => {
  return (
    <div className='skills-content'>
      <div>
        <h5>Front End Development</h5>
        <ul>
          <li><div className='devicon-html5-plain colored'></div>HTML</li>
          <li><div className='devicon-css3-plain colored'></div>CSS</li>
          <li><div className='devicon-bootstrap-plain colored'></div>Bootstrap</li>
          <li><div className='devicon-javascript-plain colored'></div>JavaScript</li>
          <li><div className='devicon-react-plain colored'></div>React JS</li>
          <li><div className='devicon-nextjs-plain'></div>Next</li>
        </ul>
      </div>
      <div>
        <h5>Back End Development</h5>
        <ul>
          <li><div className='devicon-nodejs-plain colored'></div>Node.js</li>
          <li><div className='devicon-express-original'></div>Express</li>
        </ul>
      </div>
      <div>
        <h5>Database</h5>
        <ul>
          <li><div className='devicon-mongodb-plain colored'></div>MongoDB</li>
        </ul>
      </div>
      <div>
        <h5>Tools</h5>
        <ul>
          <li><div className='devicon-git-plain colored'></div>Git</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;