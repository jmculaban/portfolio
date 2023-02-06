import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Social = () => {
  return (
    <div className='link-content'>
      <div className='social-links email'>
        <SocialIcon className='social-logo' network='email' bgColor='#318CE7' style={{ height: 30, width: 30 }}/>
        culabanjohnmichael@gmail.com
      </div>
      <a className='social-links' href='https://www.linkedin.com/in/jmculaban' target='_blank' rel="noreferrer">
        <SocialIcon className='social-logo' network='linkedin' bgColor='#318CE7' style={{ height: 30, width: 30 }}/>
        Linkedin
      </a>
      <a className='social-links' href='https://twitter.com/johnmike034' target='_blank' rel="noreferrer">
        <SocialIcon className='social-logo' network='twitter' bgColor='#318CE7' style={{ height: 30, width: 30 }}/>
        Twitter
      </a>
      <a className='social-links' href='https://www.facebook.com/jmculaban03' target='_blank' rel="noreferrer">
        <SocialIcon className='social-logo' network='facebook' bgColor='#318CE7' style={{ height: 30, width: 30 }}/>
        Facebook
      </a>
    </div>
  );
};

export default Social;