import React from 'react';
import { Mail, Linkedin, Twitter, Facebook } from 'react-feather';

const Social = () => {
  return (
    <div className='link-content'>
      <div className='social-links email'>
        <Mail className='social-logo' />
        culabanjohnmichael@gmail.com
      </div>
      <a className='social-links' href='https://www.linkedin.com/in/jmculaban' target='_blank' rel="noreferrer">
        <Linkedin className='social-logo' />
        Linkedin
      </a>
      <a className='social-links' href='https://twitter.com/johnmike034' target='_blank' rel="noreferrer">
        <Twitter className='social-logo' />
        Twitter
      </a>
      <a className='social-links' href='https://www.facebook.com/jmculaban03' target='_blank' rel="noreferrer">
        <Facebook className='social-logo' />
        Facebook
      </a>
    </div>
  );
};

export default Social;