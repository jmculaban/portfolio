import React from 'react';
import Intro from '../components/Intro';
import Link from '../components/Link';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

const Home = () => {
  const media = window.matchMedia('(max-width: 767px)');

  const clickIndication = () => {
    if (media.matches) {
      document.querySelector('.link-tap').classList.toggle('open');
      document.querySelector('.intro-tap').classList.toggle('open');
    }
  }

  return (
    <div onClick={clickIndication}>
      <Intro />
      <Link />
      <Footer />
      <Profile />
    </div>
  );
};

export default Home;