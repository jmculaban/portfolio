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
          <li><div className='devicon-redux-plain'></div>Redux</li>
          <li><div className='devicon-csharp-plain'></div>C#</li>
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
          <li><div className='devicon-postgresql-plain colored'></div>MongoDB</li>
          <li><div className='devicon-oracle-plain colored'></div>Oracle Database</li>
        </ul>
      </div>
      <div>
        <h5>Cloud</h5>
        <ul>
          <li><div className='devicon-azure-plain colored'></div>Microsoft Azure</li>
        </ul>
      </div>
      <div>
        <h5>Tools</h5>
        <ul>
          <li><div className='devicon-git-plain colored'></div>Git</li>
          <li><div className='devicon-jenkins-plain colored'></div>Jenkins</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;