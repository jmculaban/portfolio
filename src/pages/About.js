import React from 'react';
import NavBar from '../components/NavBar';
import Skills from '../components/Skills';

const About = () => {
  return (
    <div>
      <NavBar />
      <div className='max-width about-block animate'>
        <h2>Cloud Architect &</h2>
        <h2>Full Stack Web Developer</h2>
        <div className='max-width-inner about-content'>
          <h4>About</h4>
          <p>Hi, I'm Michael. Experienced software developer and cloud architect with expertise in Microsoft Azure, MERN stack, C#, PostgreSQL, and Oracle Database. Skilled in deploying infrastructure as code to Microsoft Azure using Terraform and Jenkins pipeline. Proven ability to lead teams and deliver quality outcomes in Agile environments. Strong knowledge in Azure services and architecture design, with a focus on building scalable and secure solutions.</p>
          <Skills />
          <p>You can download and check my resume in the link below:</p>
          <a className='social-links resume' href='https://drive.google.com/file/d/1O5bh0H-9HWC7onQC6q93TM9TEINdzG4y/view?usp=sharing' target='_blank' rel='noreferrer'>My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default About;