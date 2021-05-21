import React from 'react';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';

const About = () => {
  return (
    <div>
      <NavBar />
      <div className='max-width about-block animate'>
        <h2>Full Stack Web Developer</h2>
        <div className='max-width-inner about-content'>
          <h4>About</h4>
          <p>Hi, I'm Michael. Experienced Electronics Engineer in the field of telecommunications. Having the responsibility of the technical operations, created some solutions that can help the company. Created some applications that automate the inventory management, generate a summary of daily accomplishment report and other solutions that help decrease some unnecessary workload. It inspires me to look into software development career.</p>
          <p>Joined the bootcamp of Zuitt for Full Stack Web Developer. Learned to build web applications using MERN stack. With the help of Zuitt and some self-learnings, develop the following skills:</p>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;