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
          <p>Hi, I'm Michael. Experienced Electronics Engineer in the field of telecommunications. Designated to lead a department, created some solutions like applications that automate the inventory management, generation of summary of daily accomplishment report and other solutions that help decrease some unnecessary workload that will help the company. It inspires me to look into a software development career.</p>
          <p>Joined the boot camp of Zuitt for Full Stack Web Developer. Learned to build web applications using the MERN stack.</p>
          <p>Currently working as an Associate Full Stack Software Engineer in Manulife. Working in an Agile environment to deliver a quality outcome. Experienced working in Microsoft Azure and database migration from Oracle Database (on-premise) to Azure PostgreSQL (cloud). Manulife University training for Software Engineers enhanced my skills in ReactJS, Node.js, and Redux.</p>
          <p>Through training and experience, I developed these skills:</p>
          <Skills />
          <p>You can download and check my resume in the link below:</p>
          <a className='social-links resume' href='https://drive.google.com/file/d/1S480ZstR1fVTDya5XmY2Yne6ecBSZcgT/view?usp=sharing' target='_blank' rel='noreferrer'>My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;