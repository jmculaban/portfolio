import React from 'react';
import Intro from '../components/Intro';
import Link from '../components/Link';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

const Home = () => {
  const media = window.matchMedia('(max-width: 767px)');

  const clickIndication = () => {
    if (media.matches) {
      document.querySelector('.link-tap').classList.toggle('show');
      document.querySelector('.intro-tap').classList.toggle('show');
    }
  }

  const smallMedia = window.matchMedia('(max-width: 767px)');

  smallMedia.addEventListener('change', (e) => {
    let introTap;
    if (document?.querySelector('.intro-tap')) {
      introTap = document.querySelector('.intro-tap');
    }
    if (!introTap.classList.contains('show')) {
      document.querySelector('.link-tap').classList.toggle('show');
      document.querySelector('.intro-tap').classList.toggle('show');
    }
  });

  return (
    <div>
      <Intro />
      <Link />
      <Footer />
      <Profile />
      <div id="tap-window" onClick={clickIndication}></div>
    </div>
  );
};

export default Home;