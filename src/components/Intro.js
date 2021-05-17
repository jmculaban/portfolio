import React from 'react';
import Row from 'react-bootstrap/Row';

const Intro = () => {
  const helloOver = (e) => {
    const { matches } = window.matchMedia('(max-width: 767px)');
    if (!matches) {
      e.target.innerHTML = '<a href="/About">About</a>';
    }
  }
  const helloLeave = (e) => {
    const { matches } = window.matchMedia('(max-width: 767px)');
    if (!matches) {
      e.target.innerHTML = 'Hello.'
    }
  }
  const iOver = (e) => {
    const { matches } = window.matchMedia('(max-width: 767px)');
    if (!matches) {
      e.target.innerHTML = '<a href="/Work">Work</a>';
    }
  }
  const iLeave = (e) => {
    const { matches } = window.matchMedia('(max-width: 767px)');
    if (!matches) {
      e.target.innerHTML = 'I am';
    }
  }
  const nameOver = (e) => {
    const { matches } = window.matchMedia('(max-width: 767px)');
    if (!matches) {
      e.target.innerHTML = '<a href="/Contact">Contact</a>';
    }
  }
  const nameLeave = (e) => {
    const { matches } = window.matchMedia('(max-width: 767px)');
    if (!matches) {
      e.target.innerHTML = 'Michael';
    }
  }

  const smallMedia = window.matchMedia('(max-width: 767px)');

  smallMedia.addEventListener('change', (e) => {
    console.dir(e.matches)
    if (e.matches) {
      const introTap = document?.querySelector('.introTap');
      console.dir(introTap);
      if (!introTap?.classList.contain('open')) {
        console.log("trigger")
        // document.querySelector('intro-tap').classList.toggle('open');
      }
    } else if (!e.matches) {
      console.log("large")
    }
  });

  return (
    <div className="max-width intro-tap open">
      <div className="vertical-center">
        <h1>
          <Row id="hello-text" onMouseOver={helloOver} onMouseLeave={helloLeave} className="intro-block intro-weight animate">
            Hello.
          </Row>
          <Row id="i-text" onMouseOver={iOver} onMouseLeave={iLeave} className="intro-block intro-color animate delay04">
            I am
          </Row>
          <Row id="name-text" onMouseOver={nameOver} onMouseLeave={nameLeave} className="intro-block intro-color intro-weight animate delay08">
            Michael
          </Row>
        </h1>
      </div>
    </div>
  );
};

export default Intro;